var path = require('path');
var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'src/index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loder", "less-loader"]
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    // optimization: {
    //   splitChunks: {
    //     name: 'vendor',
    //     chunks: 'initial',
    //   }
    // },
    performance: { hints: false }
}
