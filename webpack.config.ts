module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer:{
        contentBase: __dirname + '/public'
    },
    module:{
        loaders:[
            { test: /\.vue$/, loader: 'vue'}
        ]
    }
};