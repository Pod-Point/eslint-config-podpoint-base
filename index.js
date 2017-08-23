module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "env":{
        "browser": true,
        "node": true,
        "jest": true
    },
    "rules": {
        "max-len": [2, 120],
        "indent": [2, 4, { "SwitchCase": 1, "VariableDeclarator": 1, "outerIIFEBody": 1 }],
        "arrow-parens": [2, "as-needed"]
    },
    "plugins": [
        "import"
    ]
};
