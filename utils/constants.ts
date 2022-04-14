export const siteTitle = "SAYA - The English Learning Platform";

export const siteDescription =
    "SAYA - The English Learning Platform. Become fluent in English with lectures from some of Myanmar best teachers, engaging contents, interactive practices sessions.";

export const siteShortDescription = "SAYA - The English Learning Platform";

export const siteURL =
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
        ? process.env.NEXT_PUBLIC_SITE_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_SITE_URL_PRODUCTION;

export const facebookLink = "https://facebook.com/sayathelearningapp";
export const linkedInLink = "https://linkedin.com";
export const youtubeLink = "https://www.youtube.com/";

export const zoomSdkKey = process.env.NEXT_PUBLIC_ZOOM_API_KEY;
export const zoomSdkSecretKey = process.env.NEXT_PUBLIC_ZOOM_API_SECRET_KEY;
export const zoomDecryptionKey = process.env.NEXT_PUBLIC_ZOOM_DECRYPTION_KEY;
