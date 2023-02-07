// const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    images: {
        domains: ["saya-education.s3.amazonaws.com", "staging.saya.education", "backend.saya.education"],
    },
};

// const sentryWebpackPluginOptions = {
//     // Additional config options for the Sentry Webpack plugin. Keep in mind that
//     // the following options are set automatically, and overriding them is not
//     // recommended:
//     //   release, url, org, project, authToken, configFile, stripPrefix,
//     //   urlPrefix, include, ignore
//
//     silent: true, // Suppresses all logs
//     // For all available options, see:
//     // https://github.com/getsentry/sentry-webpack-plugin#options.
// };

// module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

module.exports = moduleExports;
