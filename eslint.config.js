export default [
    {
        ignores: ['node_modules/', 'dist/', 'build/'] // Ignore common directories
    },
    {
        languageOptions: {
            parser: '@babel/eslint-parser',
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-react']
                }
            }
        }
    },
    {
        plugins: {
            react: require('eslint-plugin-react'),
            'react-hooks': require('eslint-plugin-react-hooks')
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn'
        }
    }];
