module.exports = {
  cache: {
    cacheId: "prototype-2",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "prototype-2",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
