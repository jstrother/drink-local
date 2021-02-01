import { writable } from 'svelte/store';

const { SNOWPACK_PUBLIC_API_KEY } = import.meta.env;

export let city = writable('Seattle');

export const breweryList = async (location) => {
  return await fetch(
    `https://api.openbrewerydb.org/breweries?page=${page()}&per_page=7&sort=+name&by_city=${
      location.replace(' ', '_').toLowerCase()
    }`
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      throw new Error(err)
    });
};

const page = () => Math.floor(Math.random() * 10);

// these deal with location data handling
let userLat = '';

let userLong = '';

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
  return await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${userLat},${userLong}&destination=${street.replace(' ', '+')}+${city}+${state}&key=${SNOWPACK_PUBLIC_API_KEY}`
  )
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => {
    throw new Error(err);
  });
};
