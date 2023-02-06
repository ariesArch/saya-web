export const siteTitle = "SAYA - The English Learning Platform";

export const siteDescription =
    "SAYA - The English Learning Platform. Become fluent in English with lectures from some of Myanmar best teachers, engaging contents, interactive practices sessions.";

export const siteShortDescription = "SAYA - The English Learning Platform";

export const siteURL =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_SITE_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_SITE_URL_PRODUCTION;

export const downloadLinks = {
    playStore: "https://play.google.com/store/apps/details?id=com.saya&hl=en&gl=US",
    appStore: "https://apps.apple.com/us/app/saya-the-english-learning-app/id1612592914",
    apk: "https://play.google.com/store/apps/details?id=com.saya&hl=en&gl=US",
    appGallery: "https://appgallery.huawei.com/app/C106635839",
};

export const socialLinks = {
    facebook: "https://www.facebook.com/sayathelearningapp",
    instagram: "https://instagram.com/saya_english_app",
    youtube: "https://youtube.com/channel/UCbOZPau0cA0haiHQ65j4YhQ",
};

export const apiUrl =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_API_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_PRODUCTION;

export const appToken =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_APP_TOKEN_DEVELOPMENT
        : process.env.NEXT_PUBLIC_APP_TOKEN_PRODUCTION;

export const zoomSdkKey = process.env.NEXT_PUBLIC_ZOOM_API_KEY;
export const zoomSdkSecretKey = process.env.NEXT_PUBLIC_ZOOM_API_SECRET_KEY;
export const zoomDecryptionKey = process.env.NEXT_PUBLIC_ZOOM_DECRYPTION_KEY;

export const GATrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_RECAPTCHAV3_SITEKEY_DEVELOPMENT
        : process.env.NEXT_PUBLIC_RECAPTCHAV3_SITEKEY_PRODUCTION;
