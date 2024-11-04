const path = require('path');

module.exports = {
    entry: './run.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './webpack-lilypad-web.js',
        library: "webpackLilypad"
    },
};