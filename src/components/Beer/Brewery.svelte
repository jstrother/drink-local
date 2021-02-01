<script>
  import { breweryDirections } from '../../Stores/store';
  export let brewery;

  const { name, street, city, state, website_url } = brewery;
</script>

<style>
  a {
    text-decoration: underline;
  }
</style>

<div class="flex flex-col border-2 m-1.5 p-1.5 max-w-sm">
  <h3>{name}</h3>
  <p>{street}</p>
  <p>{city}, {state}</p>
  <div class="flex flex-row justify-between place-self-end">
    {#if website_url}
      <a href={website_url} target="_blank">Website</a>
    {/if}
    {console.log(breweryDirections(street, city, state))}
    <a href={breweryDirections(street, city, state)} target="_blank">Directions</a>
  </div>  
</div>
