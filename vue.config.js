module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hardcaptor-webtools/'
    : '/',
  pwa: {
    "name": "Hardcaptor",
    "short_name": "HSFMP"
  }
}