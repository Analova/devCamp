const nodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdaper: "http",
  apiKey: process.env.GEOCODER_API_KEY,
  formater: null
};

const geocoder = nodeGeocoder(options);

module.exports = geocoder;
