{
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env":{
        "browser": true,
        "node": true,
        "jest": true
    },
    "rules": {
        "max-len": [2, 120],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "indent": [2, 4, { "SwitchCase": 1, "VariableDeclarator": 1, "outerIIFEBody": 1 }],
        "react/require-extension": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-curly-spacing": [2, "always"],
        "arrow-parens": [2, "as-needed"]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "resolve": {
        "extensions": ["", ".js", ".jsx"]
    }
}
