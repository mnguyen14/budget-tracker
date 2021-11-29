const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/index.js",
    output: {
        path: path.join(__dirname, "/public/dist"),
        filename: "bundle.js"
    },
    mode: "production",
    plugins: [
        new WebpackPwaManifest({
            publicPath: '/dist',
            filename: "manifest.json",
            inject: false,
            fingerprints: false,
            name: "Budget Tracker App",
            short_name: "Budget App",
            description: "An app that can track your budget.",
            theme_color: "#ffffff",
            background_color: "#ffffff",
            start_url: "/",
            crossorigin: "use-credentials",
            icon: [
                {
                    src: path.resolve('public/icons/icon-512x512.png'),
                    sizes: [512, 192],
                }
            ]
        })
    ]
}

module.exports = config;