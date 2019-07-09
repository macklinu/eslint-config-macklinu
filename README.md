# eslint-config-macklinu

> My personal ESLint config

## Installation

```
yarn add eslint prettier eslint-config-macklinu --dev
```

## Usage

In your ESLint config file in your repo (e.g. `.eslintrc.js`):

```js
module.exports = {
  extends: [
    'macklinu',
    'macklinu/jest', // optional for Jest
    'macklinu/react', // optional for React project
    'macklinu/typescript', // optional for TypeScript project
  ],
}
```
