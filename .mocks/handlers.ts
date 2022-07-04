import { rest } from 'msw'

export const handlers = [
  rest.get('/ssr', (_, res, ctx) => {
    return res(
      ctx.json({
        title: 'SSR Source',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      })
    )
  }),
  rest.get('/csr', (_, res, ctx) => {
    return res(
      ctx.json({
        title: 'CSR Source',
        text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
      })
    )
  }),
]
