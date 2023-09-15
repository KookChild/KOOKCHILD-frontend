const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@utility': path.resolve(__dirname, 'src/utility'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@config/*': path.resolve(__dirname, 'src/config/*'),
      '@recoil': path.resolve(__dirname, 'src/recoil'),
      '@recoil/*': path.resolve(__dirname, 'src/recoil/*'),
    },
  },
}
