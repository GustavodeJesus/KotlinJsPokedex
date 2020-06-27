var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/js/packages/KotlinJsPokedex/kotlin/KotlinJsPokedex.js"]
};

config.output = {
    path: "/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "KotlinJsPokedex.js"
            : "KotlinJsPokedex-[name].js";
    },
    library: "KotlinJsPokedex",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/processedResources/Js/main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/reports/webpack/KotlinJsPokedex/webpack.config.evaluated.js", evaluatedConfig, function (err) {});

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        let p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace(new RegExp("/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/js", 'g'), '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);
module.exports = config
