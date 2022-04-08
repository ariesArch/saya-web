import { css } from "@emotion/react";
import { useEffect, useState } from "react";

import VisibilitySensor from "@/components/common/VisibilitySensor/VisibilitySensor.component";
import CourseSection from "@/components/landing/CourseSection/CourseSection.component";
import FeaturesSection from "@/components/landing/FeaturesSection/FeaturesSection.component";
import Footer from "@/components/landing/Footer/Footer.component";
import LiveClassSection from "@/components/landing/LiveClassSection/LiveClassSection.component";
import OverviewSection from "@/components/landing/OverviewSection/OverviewSection.component";
import TopBar from "@/components/landing/TopBar/TopBar.component";
import { LandingSectionType } from "@/interfaces/common.interfaces";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
    const [visibleSection, setVisibleSection] = useState<LandingSectionType>("overview");
    const [sectionStatus, setSectionStatus] = useState<{ [key: string]: boolean }>({
        overview: false,
        liveClass: false,
        features: false,
        course: false,
        contact: false,
    });

    const onVisibleSectionChange = (isVisible: boolean, section: LandingSectionType) => {
        if (sectionStatus[section] !== isVisible)
            setSectionStatus({ ...sectionStatus, [section]: isVisible });
    };

    useEffect(() => {
        let visibleSec: LandingSectionType = "overview";
        Object.keys(sectionStatus).forEach((key) => {
            if (sectionStatus[key]) {
                visibleSec = key as LandingSectionType;
            }
        });
        if (visibleSec !== visibleSection) setVisibleSection(visibleSec);
    }, [sectionStatus, visibleSection]);

    return (
        <DefaultLayout topBar={<TopBar visibleSection={visibleSection} />}>
            <div css={container}>
                <VisibilitySensor onChange={(isVisible) => onVisibleSectionChange(isVisible, "overview")}>
                    <OverviewSection />
                </VisibilitySensor>
                <VisibilitySensor onChange={(isVisible) => onVisibleSectionChange(isVisible, "liveClass")}>
                    <LiveClassSection />
                </VisibilitySensor>
                <VisibilitySensor onChange={(isVisible) => onVisibleSectionChange(isVisible, "features")}>
                    <FeaturesSection />
                </VisibilitySensor>
                <VisibilitySensor onChange={(isVisible) => onVisibleSectionChange(isVisible, "course")}>
                    <CourseSection />
                </VisibilitySensor>
                <VisibilitySensor onChange={(isVisible) => onVisibleSectionChange(isVisible, "contact")}>
                    <Footer />
                </VisibilitySensor>
            </div>
        </DefaultLayout>
    );
}

const container = css`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding-top: 12rem;
    background-color: #fffcf8;
`;
