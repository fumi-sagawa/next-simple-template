import { ResponseResolver, RestRequest, RestContext, PathParams } from 'msw'

export const mockLogout: ResponseResolver<RestRequest<never, PathParams<string>>, RestContext> = (
  _req,
  res,
  ctx
) => {
  // 実際にはなんらかの認証情報を持っている想定
  sessionStorage.removeItem('is-authenticated')
  return res(
    ctx.status(200),
    ctx.json({
      message: 'ログアウトしました',
    })
  )
}
