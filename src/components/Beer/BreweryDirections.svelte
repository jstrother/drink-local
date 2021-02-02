<script>
  import { showMap, breweryDirections } from '../../Stores/directionStore';

  function show() {
    showMap.set(false);
  }
</script>

<h1 class="place-self-center" on:click="{show}">Directions</h1>
