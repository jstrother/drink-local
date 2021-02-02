<script>
  import Brewery from '../Beer/Brewery.svelte';
  import { city, breweryList } from '../../Stores/breweryStore';
</script>

<h3 class="place-self-center">Brewery List</h3>
<div class="flex flex-wrap justify-center">
  {#await breweryList($city)}
    <p>Finding nearby breweries...</p>
  {:then list}
    {#each list as brewery}
      {#if brewery.brewery_type !== 'planning'}
        <Brewery {brewery} />
      {/if}
    {/each}
  {:catch}
    <p>Sorry, something happened. Please try again.</p>
  {/await}
</div>