const reactAppConfig = require('eslint-config-react-app')

module.exports = {
  ...reactAppConfig,
  rules: {
    ...reactAppConfig.rules,
    strict: [0],
    'no-sequences': [0],
    'no-mixed-operators': [0],
    'react/react-in-jsx-scope': [0],
    'no-useless-escape': [0],
    'max-len': ['error', { code: 120 }],
    'react/prop-types': ['error']
  }
}
