import { css } from "@emotion/react";

import TopBar from "@/components/common/TopBar/TopBar.component";
import FAQSection from "@/components/faq/FAQSection/FAQSection.component";
import Footer from "@/components/landing/Footer/Footer.component";
import UnauthedLayout from "@/layouts/UnauthedLayout";

const FAQPage = () => {
    return (
        <UnauthedLayout topBar={<TopBar navItem={navItem} />}>
            <div css={container}>
                <FAQSection />
                <Footer />
            </div>
        </UnauthedLayout>
    );
};

const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 12rem;
    background-color: #fffcf8;
`;

const navItem = {
    id: 2,
    name: "FAQs",
    href: "faq",
};

export default FAQPage;
