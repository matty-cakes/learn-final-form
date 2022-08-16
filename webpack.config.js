const path = require('path')

module.exports = {
  devServer: {
    hot: true,
    port: 8989,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
}