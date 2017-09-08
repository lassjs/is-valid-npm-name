# is-valid-npm-name

[![build status](https://semaphoreci.com/api/v1/niftylettuce/is-valid-npm-name/branches/master/shields_badge.svg)](https://semaphoreci.com/niftylettuce/is-valid-npm-name)
[![code coverage](https://img.shields.io/codecov/c/github/lassjs/is-valid-npm-name.svg)](https://codecov.io/gh/lassjs/is-valid-npm-name)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/lassjs/is-valid-npm-name.svg)](<>)

> Checks if a given string is a valid npm package name adhering to [npm rules](https://docs.npmjs.com/files/package.json#name) and best practice


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Error Strings](#error-strings)
* [Rule Exemption](#rule-exemption)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install is-valid-npm-name
```

[yarn][]:

```sh
yarn add is-valid-npm-name
```


## Usage

```js
const isValidNpmName = require('is-valid-npm-name');

const check = isValidNpmName('fs');

// `check` is `true` or a String (e.g. why it was not a valid npm name)
if (check !== true) {
  console.error(check);
  // 'package name cannot use built-in core Node module name'
}
```


## Error Strings

* package name must be a String
* remove trailing spaces from start and end of package name
* package name cannot be more than 214 characters
* package name cannot start with a dot nor underscore
* package name cannot have uppercase letters
* scoped package name must start with "@" character
* scoped package name has an extra "@" character
* scoped package name must be in the format of `@myorg/package`
* scoped package name has an extra "/" character
* package name cannot use built-in core Node module name
* package name had non-URL-safe characters


## Rule Exemption

We ignore a single npm rule, which is:

> don't put "js" or "node" in the name

This is due to the sheer number of npm package name squatters.

Sometimes it's absolutely necessary to affix with `js` or `node`.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **Nick Baugh** | <http://niftylettuce.com/> |


## License

[MIT](LICENSE) © [Nick Baugh](http://niftylettuce.com/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
