/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  //参考文献
  //https://github.com/vercel/next.js/issues/20271#issuecomment-778838689
  //https://qiita.com/70ki8suda/items/eb617541379048e87811
  sassOptions: {
    prependData: "@use 'src/styles/' as *;",
  },
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
}
