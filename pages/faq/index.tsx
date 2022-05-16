import { css } from "@emotion/react";

import FAQSection from "@/components/faq/FAQSection/FAQSection.component";
import TopBar from "@/components/faq/TopBar/TopBar.component";
import Footer from "@/components/landing/Footer/Footer.component";
import UnauthedLayout from "@/layouts/UnauthedLayout";

export default function Home() {
    return (
        <UnauthedLayout topBar={<TopBar />}>
            <div css={container}>
                <FAQSection />
                <Footer />
            </div>
        </UnauthedLayout>
    );
}

const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 12rem;
    background-color: #fffcf8;
`;
