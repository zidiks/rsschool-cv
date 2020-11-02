var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        library: "modules"
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['./'] }
        })
    ]
}