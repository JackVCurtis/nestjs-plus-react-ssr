const path = require('path')
const fs = require('fs')
const { DefinePlugin } = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

const fileList = fs.readdirSync(path.join(__dirname, 'app', 'pages'))

const pages = fileList.filter(fn => !fn.includes('.spec'))
                .reduce((acc, fn) => {
                    acc[fn.split('.')[0].toLowerCase()] = {
                        import: `./app/pages/${fn}`,
                        library: {
                            type: 'module'
                        },
                        dependOn: 'vendor'
                    }
                    return acc
                }, {})

const babelOptions = {
    targets: {
        esmodules: true
    },
    "presets": [
        "@babel/preset-react",
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-typescript"
    ]
};
                  
module.exports = {
    target: ['web', 'es2020'],
    entry: {
        main: {
            import: './app/main.tsx',
            dependOn: 'vendor'
        },
        ...pages,
        vendor: {
            import: ['react', 'react-router-dom', 'react-dom/client'],
        }
    },
    devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : false,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelOptions
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public', 'scripts'),
        clean: true,
        module: true,
        library: {
            type: 'module'
        },
        chunkFormat: 'module'
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    module: true,
                }
            })
        ],
        usedExports: true,
        mangleExports: false
    },
    plugins: [
        new DefinePlugin({
            'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
        })
    ],
    experiments: {
        outputModule: true
    }
};