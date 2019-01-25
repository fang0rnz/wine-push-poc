module.exports = {
  publicPath: '/wine-push-poc/',
  pwa: {
    name: 'Wine',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#a82472',
    msTileColor: '#a82472',
    workboxOptions: {
      swSrc: 'src/custom-sw.js'
    }
  }
};
