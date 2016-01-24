import partial from 'webpack-partial';

export default (babel) => (config) => partial(config, {
  module: {
    loaders: [{
      name: 'babel',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      query: babel,
    }],
  },
});
