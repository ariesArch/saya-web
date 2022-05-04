import Image from "next/image";

import Button from "@/components/common/Button/Button.component";
import FacebookIcon from "@/public/icons/facebook.png";
import InstagramIcon from "@/public/icons/instagram.png";
import Logo from "@/public/icons/logo.svg";
import YoutubeIcon from "@/public/icons/youtube.png";
import FooterBackground from "@/public/images/footer-bg.svg";
import { socialLinks } from "@/utils/constants";

import * as styles from "./Footer.styles";

const Footer = () => {
    const onGoTop = () => {
        const element = document.getElementById("overview");
        if (element) element.scrollIntoView({ block: "start" });
    };

    return (
        <footer css={styles.footer} id="contact">
            <div css={styles.container}>
                <div css={styles.logoContainer}>
                    <Logo />

                    <div css={styles.logoTexts}>
                        <span css={styles.logoHeading}>SAYA</span>
                        <span css={styles.logoSubHeading}>The English Learning Platform</span>
                    </div>
                </div>
                <div css={styles.contents}>
                    <span css={styles.text}>Become fluent in English.</span>
                    <Button css={styles.button} color="primary" onClick={onGoTop}>
                        Getting Started
                    </Button>
                </div>

                <div css={styles.contactsContainer}>
                    <div css={styles.socialLinks}>
                        {links.map(({ id, name, icon, link }) => (
                            <a css={styles.socialLink} key={id} href={link} target="_blank" rel="noreferrer">
                                <Image src={icon} alt={`${name} icon`} />
                            </a>
                        ))}
                    </div>
                </div>

                <div css={styles.bgContainer}>
                    <FooterBackground />
                </div>
            </div>
        </footer>
    );
};

export const links = [
    {
        id: 1,
        name: "Facebook",
        icon: FacebookIcon,
        link: socialLinks.facebook,
    },
    {
        id: 3,
        name: "Youtube",
        icon: YoutubeIcon,
        link: socialLinks.youtube,
    },
    {
        id: 2,
        name: "Instagram",
        icon: InstagramIcon,
        link: socialLinks.instagram,
    },
];

export default Footer;
