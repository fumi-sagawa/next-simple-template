import { ResponseResolver, RestRequest, RestContext, PathParams } from 'msw'

export const mockLogin: ResponseResolver<RestRequest<never, PathParams<string>>, RestContext> = (
  _req,
  res,
  ctx
) => {
  // 実際にはなんらかの認証情報を持っている想定
  sessionStorage.setItem('is-authenticated', 'true')
  return res(
    ctx.status(200),
    ctx.json({
      message: 'ログインしました',
      user: {
        id: 1,
        name: '認証ユーザー',
      },
    })
  )
}
