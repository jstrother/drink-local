<script>
  import { city } from '../../Stores/store';
</script>

<div class="flex flex-col place-self-center">
  <label for="name">Which city are you in? (If not Seattle)</label>
  <input class="max-w-xs border-2" type="text" name="city" bind:value={$city} />
</div>