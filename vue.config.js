module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hardcaptor-webtools/'
    : '/',
  pwa: {
    "themeColor": "#DB88A6",
    "name": "Hardcaptor",
    "short_name": "HSFMP"
  }
}