const { merge } = require('webpack-merge');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = {
    mode:'development',
    entry: './src/client/index.js',
    output: {
    //   path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    
    module: {
        rules: [
          // ... 其它规则
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      plugins: [
        new VueLoaderPlugin(),
        new VueSSRClientPlugin()
      ]
  };