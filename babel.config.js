module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@modules': './src/modules',
        '@shared': './src/shared',
        '@config': './src/config',
        '@routes': './src/routes',
        '@models': './src/models',
        '@controllers': './src/controllers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
