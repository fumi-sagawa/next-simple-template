import Axios from 'axios'

export const axios = Axios.create({
  // アサーションが気になる場合は以下参照
  // https://zenn.dev/okumura_daiki/articles/6d3632c6885ed6
  baseURL: process.env.API_URL as string,
})
