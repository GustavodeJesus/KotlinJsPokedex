{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/js/packages/KotlinJsPokedex/kotlin/KotlinJsPokedex.js'
    ]
  },
  output: {
    path: '/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/distributions',
    filename: [Function: filename],
    library: 'KotlinJsPokedex',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/home/gustavo/Documentos/PROJETOS_WEB/KotlinJsPokedex/build/processedResources/Js/main'
    ]
  }
}