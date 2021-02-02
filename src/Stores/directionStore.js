import { writable } from 'svelte/store';

const { SNOWPACK_PUBLIC_API_KEY } = import.meta.env;

export let showMap = writable(false);
export let brewCity = writable('');
export let brewState = writable('');
export let brewStreet = writable('');

// these deal with location data handling
let userLat = 0;
let userLong = 0;

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    userLat = position.coords.latitude;
    userLong = position.coords.longitude;
  });
}

export const breweryDirections = async (street, city, state) => {
  if (!userLat || !userLong) {
    return;
  }
  console.log(userLat, userLong);
  return await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${userLat},${userLong}&destination=${brewStreet.replace(' ', '+')}+${brewCity}+${brewState}&key=${SNOWPACK_PUBLIC_API_KEY}`, {
      mode: 'no-cors'
    }
  )
  .then((res) => res.json())
  .then((data) => {
    console.log('data:', data);
    return data;
  })
  .catch((err) => {
    throw new Error(err);
  });
};
