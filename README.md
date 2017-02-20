# eslint-config-phrontend

[![Greenkeeper badge](https://badges.greenkeeper.io/boopathi/eslint-config-phrontend.svg)](https://greenkeeper.io/)

An eslint config for [phrontend](https://github.com/flipkart-incubator/phrontend) and [phrontend-webpack](https://github.com/flipkart-incubator/phrontend-webpack). If you like our style guide (eslint config), you can simply use it in your own project.

## Install

```sh
npm install eslint-config-phrontend --save-dev
```

eslint-config-phrontend uses [babel-eslint](https://github.com/babel/babel-eslint) as the parser. If you're using npm@3, peerDependencies are not automatically installed. So you'd have to manually install babel-eslint.

```sh
npm install babel-eslint --save-dev
```

## Usage

```js
// .eslintrc
{
  "extends": "phrontend"
}
```

## Examples

1. https://github.com/flipkart-incubator/phrontend-webpack/blob/master/.eslintrc
1. https://github.com/flipkart-incubator/phrontend/blob/master/.eslintrc
