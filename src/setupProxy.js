const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api', // Adjust this to match the URL path you're trying to access
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  )
}
