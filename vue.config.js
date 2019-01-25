module.exports = {
  publicPath: '/pinacolada-push-poc/',
  pwa: {
    name: 'pinacolada',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#a82472',
    msTileColor: '#a82472',
    workboxOptions: {
      swSrc: 'src/custom-sw.js'
    }
  }
};
