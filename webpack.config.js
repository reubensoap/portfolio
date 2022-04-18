const path = require('path');

console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(jpe?p|gif|png|svg)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
};

