<script>
  import { showMap, brewLocation, userCoords, apiKey } from '../../Stores/store';
  
  const src = `https://www.google.com/maps/embed/v1/directions?key=${$apiKey}&origin=${$userCoords}&destination=${$brewLocation}&center=${$userCoords}&zoom=12`;

  const dimension = 400;

  function show() {
    showMap.set(false);
  }
</script>

<h1 class="place-self-center">Map</h1>
<iframe {src} frameborder="0" title="Brewery Map" class="place-self-center m-3" height={dimension} width={dimension}></iframe>
<p on:click="{show}" class="cursor-pointer place-self-center border-gray-300 rounded-md border-2 p-2">Close</p>
