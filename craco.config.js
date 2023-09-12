const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@utility': path.resolve(__dirname, 'src/utility'),
      '@config': path.resolve(__dirname, 'src/config/'),
    },
  },
}
