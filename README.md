# react-coding-style

> For lazy person like me, have pre-defined `react` project config of `eslint` + `prettier` installed together with their dependenies.

## Usage

**Install**:

```bash
$ yarn add --dev react-coding-style
```

Edit `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('react-coding-style/src/eslint')]
}
```

Edit `.prettierrc.js`

```js
const prettier = require('react-coding-style/src/prettier')

module.exports = {
  ...prettier
}
```
