import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { siteDescription, siteShortDescription, siteTitle } from "@/utils/constants";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#b91d47" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="shortcut icon" href="/favicon.ico" />

                    <meta name="description" content={siteDescription} />
                    <meta name="twitter:description" content={siteShortDescription} />
                    <meta name="twitter:title" content={siteTitle} />
                    <meta name="twitter:creator" content="Thet Aung with Binary Lab Team" />
                    <meta name="twitter:card" content="summary" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content={siteShortDescription} />
                    <meta property="og:title" content={siteTitle} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
