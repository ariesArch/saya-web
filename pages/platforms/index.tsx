import { css } from "@emotion/react";
import { useEffect } from "react";

import TopBar from "@/components/common/TopBar/TopBar.component";
import Footer from "@/components/landing/Footer/Footer.component";
import PlatformsSection from "@/components/platforms/PlatformsSection/PlatformsSection.components";
import UnauthedLayout from "@/layouts/UnauthedLayout";

const PlatformsPage = () => {
    useEffect(() => {
        const generateDeviceId = () => {
            const { userAgent } = window.navigator;
            const { platform } = window.navigator;
            const uniqueId = userAgent + platform;
            console.log(uniqueId);
            const charCodeArray = uniqueId.split("").map((char) => char.charCodeAt(0));
            console.log(charCodeArray);
            const deviceId = charCodeArray.reduce((prevHash, currVal) => prevHash + currVal, 0).toString();
            return deviceId;
        };
        console.log(generateDeviceId());
    }, []);

    return (
        <UnauthedLayout topBar={<TopBar navItem={navItem} />}>
            <div css={container}>
                <PlatformsSection />
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
    name: "Platforms",
    href: "platforms",
};

export default PlatformsPage;
