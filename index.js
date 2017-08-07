module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb-base", "eslint-config-airbnb/rules/react", "eslint-config-airbnb/rules/react-a11y"],
    "env":{
        "browser": true,
        "node": true,
        "jest": true,
    },
    "rules": {
        "arrow-parens": [2, "as-needed"],
        "class-methods-use-this": "warn",
        "import/order": "error",
        "indent": [2, 4, { "SwitchCase": 1, "VariableDeclarator": 1, "outerIIFEBody": 1 }],
        "max-len": [2, 120],
        "object-curly-newline": ["error", {"minProperties": 1}],
        "react/jsx-curly-spacing": ["error", {"when": "always", "children": true}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-no-bind": ["warn"],
        "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": ["warn"],
        "react/require-extension": "off",
    },
    "plugins": [
        "import",
        "jsx-a11y",
        "react",
    ],
    "resolve": {
        "extensions": ["", ".js", ".jsx"]
    }
};
