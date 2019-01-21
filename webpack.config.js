const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "src", "dist"),
        port: 8080,
        index: "index.html",
        historyApiFallback: true
      },
    mode: 'development',
    node: {
        fs: 'empty'
      }, 
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'src', 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
        },
        {
            test: /\.jsx?$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    exclude: /(node_modules)/,
                    plugins: [
                        // Stage 0
                        "@babel/plugin-proposal-function-bind",
                        // Stage 1
                        "@babel/plugin-proposal-export-default-from",
                        "@babel/plugin-proposal-logical-assignment-operators",
                        ["@babel/plugin-proposal-optional-chaining", { loose: false }],
                        [
                          "@babel/plugin-proposal-pipeline-operator",
                          { proposal: "minimal" }
                        ],
                        [
                          "@babel/plugin-proposal-nullish-coalescing-operator",
                          { loose: false }
                        ],
                        "@babel/plugin-proposal-do-expressions",
                        // Stage 2
                        ["@babel/plugin-proposal-decorators", { legacy: true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",
                        // Stage 3
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-syntax-import-meta",
                        ["@babel/plugin-proposal-class-properties", { loose: false }],
                        "@babel/plugin-proposal-json-strings"
                      ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }

        ]
    }, 
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "source-map"
};