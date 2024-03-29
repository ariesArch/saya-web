import { css } from "@emotion/react";
import Head from "next/head";
import { ReactNode } from "react";

interface UnauthedLayoutProps {
    title?: string;
    topBar?: ReactNode;
    children: ReactNode;
}

const UnauthedLayout = (props: UnauthedLayoutProps) => {
    const { title = "SAYA - The English Learning Platform", topBar, children } = props;

    return (
        <div css={container}>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, minimum-scale=1" />
            </Head>
            {topBar && <header>{topBar}</header>}
            <div css={body}>{children}</div>
        </div>
    );
};

const container = css`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const body = css`
    box-sizing: inherit;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

export default UnauthedLayout;
