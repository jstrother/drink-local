<script>
  import { wantToFindBeer } from '../../Stores/store';

  function gimmeBeer() {
    wantToFindBeer.set(true);
  }
</script>

<p class="cursor-pointer place-self-center border-gray-300 rounded-md border-2 p-2" type="submit" on:click|preventDefault={gimmeBeer}>Find Beer!</p>