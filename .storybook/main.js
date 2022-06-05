module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            /*
            Next.js側でSCSSの読み込みにtsconfig.json, next.config.jsを用いている。
            しかし、Storybookはそのスコープ外であるためmixinなどの読み込みが行えずエラーとなる。
            したがってwebpackのsass-loader：additionalDataで全てのscssを前処理し、
            mixinやvariablesなどの初期読み込みを行う。
            https://webpack.js.org/loaders/sass-loader/
            */
            additionalData: `@use 'src/styles/' as *;`,
          },
        },
      ],
    })
    return config
  },
  core: {
    builder: 'webpack5',
  },
}
