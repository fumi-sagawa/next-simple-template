export const config = {
  exportType: 'default',
  nameFormat: 'none',
  implementation: 'sass',
  additionalData: "@use 'src/styles/' as *;",
  ignore: ['**/variables.scss', '**/functions.scss', '**/index.scss'],
}
