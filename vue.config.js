const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.devServer.disableHostCheck(true)
  },
  lintOnSave: true,

  // 打包后可以部署到任意目录
  publicPath: './',

  devServer: {
    open: true
  },
  // 插件的配置
  pluginOptions: {
    // 使用脚手架webpack去注入全局样式loader
    'style-resources-loader': {
      // 预处理器
      preProcessor: 'less',
      // 指定那些文件注入到页面中
      patterns: [
        path.join(__dirname, './src/styles/variables.less')
      ]
    }
  }
}
