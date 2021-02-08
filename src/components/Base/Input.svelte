<script>
  import { city } from '../../Stores/breweryStore';
  import { postalCode } from '../../Stores/store';
</script>

{#if $postalCode}
  <p>Found you! {$postalCode}</p>
{:else}
  <div class="flex flex-col place-self-center">
    <label for="name">Sorry, we could not determine your location. Please enter your city below.</label>
    <input class="max-w-md border-2" type="text" name="city" bind:value={$city} />
  </div>
{/if}