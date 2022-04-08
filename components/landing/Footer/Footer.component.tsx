import Image from "next/image";

import Button from "@/components/common/Button/Button.component";
import FacebookIcon from "@/public/icons/facebook.png";
import LinkedInIcon from "@/public/icons/linkedin.png";
import Logo from "@/public/icons/logo.svg";
import YoutubeIcon from "@/public/icons/youtube.png";
import FooterBackground from "@/public/images/footer-bg.svg";
import { facebookLink, linkedInLink, youtubeLink } from "@/utils/constants";

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
                    <div css={styles.aboutFounders}>
                        {contacts.map(({ id, name, position, email, phone }) => (
                            <div css={styles.contactItem} key={id}>
                                <span css={styles.contactHeading}>
                                    <strong>{name}</strong> | {position}
                                </span>
                                <a css={styles.contactText} href={`mailto:${email}`}>
                                    {email}
                                </a>
                                <span css={styles.contactText}>{phone}</span>
                            </div>
                        ))}
                    </div>

                    <div css={styles.socialLinks}>
                        {socialLinks.map(({ id, icon, link }) => (
                            <a css={styles.socialLink} key={id} href={link} target="_blank" rel="noreferrer">
                                <Image src={icon} />
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

export const socialLinks = [
    {
        id: 1,
        icon: FacebookIcon,
        link: facebookLink,
    },
    {
        id: 2,
        icon: LinkedInIcon,
        link: linkedInLink,
    },
    {
        id: 3,
        icon: YoutubeIcon,
        link: youtubeLink,
    },
];

const contacts = [
    {
        id: 1,
        name: "Shem",
        position: "Director",
        email: "shem@binarylab.io",
        phone: "(+95) 9123456789",
    },
    {
        id: 2,
        name: "BkarJu",
        position: "Head of Marketing",
        email: "bkar@binarylab.io",
        phone: "(+95) 9123456789",
    },
];

export default Footer;
