/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const pagesPath = {
  post: {
    $url: (url?: { hash?: string }) => ({ pathname: '/post' as const, hash: url?.hash }),
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash }),
}

export type PagesPath = typeof pagesPath
