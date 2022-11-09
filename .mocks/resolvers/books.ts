import { ResponseResolver, RestRequest, RestContext, PathParams } from 'msw'
import { Book } from '../types'

const get: ResponseResolver<RestRequest<never, PathParams<string>>, RestContext> = (
  _req,
  res,
  ctx
) => {
  return res(
    // ctx.delay(2000),
    ctx.json<Book[]>([
      {
        title: '100万回生きたねこ',
        description:
          '輪廻転生を繰り返している一匹の猫が、やがて運命の相手と出会ったことで愛や悲しみを知っていく様を描いた、哲学的な養素を含んだ作品。',
      },
      {
        title: 'ライ麦畑でつかまえて',
      },
      {
        title: 'リーダブルコード',
        description: 'より良いコードを書くためのシンプルで実践的なテクニック',
      },
    ])
  )
}

export const mockBooks = {
  get,
}
