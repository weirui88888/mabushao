const cdn = {
  css: [
    // element-ui css
    'https://cdn.bootcss.com/element-ui/2.12.0/theme-chalk/index.css',
    // bootstrap css
    'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css'
  ],
  js: [
    // vue must at first!
    'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    // element-ui js
    'https://cdn.bootcss.com/element-ui/2.12.0/index.js',
    // jquery
    'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
  ]
}
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  chainWebpack: config => {
    let externals = {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'jquery': '$',
      'bootstrap': 'bootstrap'
    }
    config.externals(externals)
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  }
}
