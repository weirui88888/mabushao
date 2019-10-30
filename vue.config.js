const path = require('path')
const merge = require('webpack-merge')
const isProduction = process.env.NODE_ENV === 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
  css: {
    // TODO:css预设器配置项,添加过后就不用在每个需要的组件中引入了
    loaderOptions: {
      // pass options to sass-loader
      scss: {
      // TODO:引入全局变量样式,@使我们设置的别名,执行src目录,因为用了webpack alias，需要在路径前加上 ~ 的前缀来避免歧义
        prependData: `
          @import "~@/styles/mixin.scss";
      `
      }
    }
  },
  publicPath: './',
  assetsDir: 'static',
  devServer: {
    hot: true
  },
  chainWebpack: config => {
    if (isProduction) {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')
      // 移除 preload 插件
      config.plugins.delete('preload')
    }
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))

    let externals = {
      'vue': 'Vue',
      'element-ui': 'ELEMENT',
      'jquery': '$',
      'bootstrap': 'bootstrap'
    }

    config.module
      .rule('images')
      .use('url-loader')
      .tap(options =>
        merge(options, {
          limit: 10240
        })
      )
    config.externals(externals)

    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
  },
  configureWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
      // config.plugins.push(
      //   // 生产环境自动删除console
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         drop_debugger: true,
      //         drop_console: true
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true
      //   })
      // )
    }
  }
}
