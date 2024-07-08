const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      changeOrigin: true,
      pathRewrite: function (path, req) {
        return path.replace('/api/', 'https://wswork.com.br/');
      },
    })
  );
};
