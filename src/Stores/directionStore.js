import { readable, writable } from 'svelte/store';

export let showMap = writable(false);

export let brewLocation = writable('');

export let userCoords;

export let postalCode;

export const apiKey = readable(import.meta.env.SNOWPACK_PUBLIC_MAPS_API_KEY);

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    userCoords = readable(`${position.coords.latitude},${position.coords.longitude}`);
  });
}

export const getPostalCode = async () => {
  return await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userCoords}&result_type=postal_code&key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      postalCode = writable(data.results[0].address_components[0].long_name);
    })
    .catch((err) => {
      throw new Error(err);
    });
};
