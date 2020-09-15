# react-coding-style

> For lazy person like me, have pre-defined `react` project config of `eslint` + `prettier` installed together with their dependenies.

## Usage

**Install**:

```bash
$ yarn add --dev react-coding-style
```

Edit `.eslintrc.js`

```js
const style = require('react-coding-style')

module.exports = style.tslint
```

Edit `.prettierrc.js`

```js
const style = require('react-coding-style')

module.exports = style.prettier
```
