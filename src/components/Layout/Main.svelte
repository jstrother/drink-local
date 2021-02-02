<script>
  import BreweryList from '../Beer/BreweryList.svelte';
  import BreweryDirections from '../Beer/BreweryDirections.svelte';
  import Input from '../Base/Input.svelte';
  import { showMap } from '../../Stores/directionStore';
</script>

<main class="flex flex-col flex-grow p-4">
  <Input />
  <br />
  {#if $showMap}
    <BreweryDirections />
  {/if}
  <br />
  <BreweryList />
</main>