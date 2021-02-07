import { writable } from 'svelte/store';

export let city = writable('');

export const getBreweryList = async (location) => {
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
