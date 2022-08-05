{
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, '..', 'node_modules'),
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
}
