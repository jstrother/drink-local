import { readable, writable } from 'svelte/store';

export let showMap = writable(false);

export let brewLocation = writable('');

export let userCoords = writable('');

export const apiKey = readable(import.meta.env.SNOWPACK_PUBLIC_MAPS_API_KEY);

export let wantToFindBeer = writable(false);

export let breweryList = writable('');
