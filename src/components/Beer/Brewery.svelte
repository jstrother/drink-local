<script>
  import { showMap, brewCity, brewState, brewStreet } from '../../Stores/directionStore';
  export let brewery;

  const { name, street, city, state, website_url } = brewery;

  brewCity.set(city);
  brewState.set(state);
  brewStreet.set(street);

  function show() {
    showMap.set(true);
  }
</script>

<div class="flex flex-col border-2 m-1.5 p-1.5 max-w-sm">
  <h3>{name}</h3>
  <p>{street}</p>
  <p>{city}, {state}</p>
  <div class="flex flex-col max-w-full">
    <br/>
    {#if website_url}
      <a class="place-self-center underline" href={website_url} target="_blank">Website</a>
      <br/>
    {/if}
    <p class="place-self-center cursor-pointer" on:click="{show}">Click for Directions</p>
  </div>  
</div>
