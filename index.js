module.exports = {
    parser: 'babel-eslint',
    extends: 'airbnb-base',
    env:{
        browser: true,
        node: true,
        jest: true
    },
    rules: {
        'max-len': [2, 160],
        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1
        }],
        'arrow-parens': [2, 'as-needed'],
        'valid-jsdoc': [1, {
            matchDescription: '[.]$',
            requireParamDescription: false,
            requireReturnDescription: false,
            prefer: {
                arg: 'param',
                argument: 'param',
                returns: 'return'
            },
            preferType: {
                boolean: 'Boolean',
                number: 'Number',
                object: 'Object',
                string: 'String'
            }
        }]
    },
    plugins: [
        'import'
    ]
};
