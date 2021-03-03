const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports ={
    //  告知webpack，需要在node端运行
    mode:'development',
    target:"node",
    entry: './../src/entry/entry-server.js',
    output:{
        libraryTarget: "commonjs2"
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
    externals: nodeExternals(),
    plugins:[
        new VueLoaderPlugin(),
        new VueSSRServerPlugin()
    ]
}