<script>
  import { showMap, brewLocation } from '../../Stores/directionStore';
  export let brewery;

  const { name, street, city, state, website_url } = brewery;

  const location = `${street.replace(' ', '+')}+${city}+${state}`;

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
    <p class="place-self-center cursor-pointer" on:click="{show}" on:click="{brewLocation.set(location)}">Click for Map</p>
  </div>  
</div>
