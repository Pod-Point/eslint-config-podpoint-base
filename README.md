# eslint-config-podpoint-base

The base configuration for [ESLint](http://eslint.org), to be included in every JavaScript project.

## Installation

Install dependencies:

```
npm install --save-dev babel-eslint eslint eslint-config-airbnb-base eslint-plugin-import pod-point/eslint-config-podpoint-base
```

Create an `.eslintrc.json` file with the following contents:

```json
{
  "extends": "@pod-point/eslint-config-podpoint-base"
}
```

Create an `.eslintignore` file with the following contents:

```
node_modules
````
