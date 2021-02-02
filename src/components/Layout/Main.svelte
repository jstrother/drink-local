<script>
  import { fade } from 'svelte/transition';
  import BreweryList from '../Beer/BreweryList.svelte';
  import BreweryMap from '../Beer/BreweryMap.svelte';
  import Input from '../Base/Input.svelte';
  import { showMap } from '../../Stores/directionStore';
</script>

<main class="flex flex-col flex-grow p-4">
  <Input />
  <br />
  {#if $showMap}
    <div class="flex flex-col" transition:fade>
      <BreweryMap />
    </div>
  {/if}
  <br />
  {#if !$showMap}
    <BreweryList />
  {/if}
</main>