module.exports = {
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
