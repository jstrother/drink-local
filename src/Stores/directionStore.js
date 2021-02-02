import { readable, writable } from 'svelte/store';

export let showMap = writable(false);
export let brewLocation = writable('');

export const apiKey = readable(import.meta.env.SNOWPACK_PUBLIC_MAPS_API_KEY);
