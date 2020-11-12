const webpack = require('webpack');
// vue.config.js
module.exports = {
    // options...
    configureWebpack: {
        plugins: [
            //bootstrapで利用されているjqueryとpoper.jsを追加
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                Popper: ['popper.js', 'default']
              }),
        ]
    }    
  }
