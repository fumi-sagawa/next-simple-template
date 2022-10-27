/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  //https://github.com/vercel/next.js/issues/20271#issuecomment-778838689
  sassOptions: {
    prependData: "@use 'src/styles/' as *;",
  },
  env: {
    NEXT_PUBLIC_API_MOCKING: 'enabled',
  },
  experimental: {
    appDir: true,
  },
}
