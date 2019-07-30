if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/demo.js')
} else {
  module.exports = require('./dist/demo.common.js')
}
