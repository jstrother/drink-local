<script>
  import Brewery from "../Beer/Brewery.svelte";
  import { apiKey, userCoords, wantToFindBeer } from '../../Stores/store';
  
  const getCity = async () => {
    return await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${$userCoords}&result_type=locality&key=${$apiKey}`
    )
      .then((res) => res.json())
      .then((data) => data.results[0].address_components[0].long_name)
      .then((city) => getBreweryList(city))
      .catch((err) => {
        throw new Error(err);
      });
  };

  // to find breweries
  const getBreweryList = async (city) => {
    return await fetch(
      `https://api.openbrewerydb.org/breweries?per_page=25&sort=name&by_city=${
        city.replace(' ', '_').toLowerCase()
      }`
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => {
        throw new Error(err)
      });
  };

  function reset() {
    wantToFindBeer.set(false);
  }
</script>

<h3 class="place-self-center">Brewery List</h3>
<div class="flex flex-wrap justify-center">
  {#await getCity()}
    <p>Finding your location and local breweries...</p>
  {:then list}
    {#each list as brewery (brewery.id)}
      {#if brewery.brewery_type !== "planning"}
        <Brewery {brewery} />
      {/if}
    {/each}
  {:catch}
    <div class="flex flex-col place-self-center">
      <p>Sorry, something happened. Please try again.</p>
      <p class="cursor-pointer border-gray-300 rounded-md border-2 p-2" on:click={reset}>Reset</p>
    </div>
  {/await}
</div>
