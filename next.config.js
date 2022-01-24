const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = {
  reactStrictMode: true,
  images: {
    // formats: ["image/png"],
    domains: ["links.papareact.com", "image.tmdb.org", "press.hulu.com"],
  },
};

// module.exports = withPlugins([optimizedImages]);
