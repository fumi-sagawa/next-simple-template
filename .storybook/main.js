//参考:https://zenn.dev/nbstsh/scraps/b7ea2c7ff7048e
module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
