module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@model': './src/model',
        '@controller': './src/controller',
        '@middlewares': './src/middlewares',
        '@view': './src/view',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
