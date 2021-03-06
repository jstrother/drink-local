/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    ['@snowpack/plugin-svelte'],
    ['@snowpack/plugin-webpack'],
    ['@snowpack/plugin-dotenv']
  ],
  packageOptions: {
    "packageLookupFields": ["svelte", "module", "main"]
  },
  devOptions: {
    port: process.env.PORT || 5000
  },
  buildOptions: {
    /* ... */
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
  ]
};
