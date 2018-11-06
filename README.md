# eslint-config-macklinu

> My personal ESLint config

## Installation

```
yarn add eslint prettier eslint-config-macklinu
```

## Usage

In your ESLint config file in your repo (e.g. `.eslintrc.js`):

```js
module.exports = {
  extends: [
    'eslint-config-macklinu',
    'eslint-config-macklinu/react', // optional for React project
    'eslint-config-macklinu/jest', // optional for Jest
  ],
}
```
