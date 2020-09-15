const eslint = require('./src/eslint')
const prettier = require('./src/prettier')

module.exports.eslint = eslint('js')
module.exports.tslint = eslint('ts')
module.exports.prettier = prettier