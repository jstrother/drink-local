<script>
  import { fade } from 'svelte/transition';
  import BreweryList from '../Beer/BreweryList.svelte';
  import BreweryMap from '../Beer/BreweryMap.svelte';
  import FindBeer from '../Beer/FindBeer.svelte';
  import { showMap, userCoords, wantToFindBeer } from '../../Stores/store';

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      userCoords.set(`${position.coords.latitude},${position.coords.longitude}`);
    });
  }
</script>

<main class="flex flex-col flex-grow p-4">
  {#if !$wantToFindBeer}
    <FindBeer />
  {:else}
    {#if $showMap}
      <div class="flex flex-col" transition:fade>
        <BreweryMap />
      </div>
    {/if}
    <br />
    {#if !$showMap}
      <BreweryList />
    {/if}
  {/if}
</main>