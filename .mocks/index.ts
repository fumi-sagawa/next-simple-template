if (typeof window === 'undefined') {
  const { server } = require('./server')
  server.listen({
    onUnhandledRequest: 'bypass',
  })
} else {
  const { worker } = require('./browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}
export {}
