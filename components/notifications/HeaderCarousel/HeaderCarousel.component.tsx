import "react-loading-skeleton/dist/skeleton.css";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

import { carouselTransition, carouselVariants } from "@/components/common/FramerMotion";
import { NotificationsAds } from "@/interfaces/notifications.interfaces";
import { ReduxState } from "@/interfaces/redux.interfaces";

import * as styles from "./HeaderCarousel.styles";

const HeaderCarousel = () => {
    const { initialAds } = useSelector((state: ReduxState) => ({ initialAds: state.notificationsState.ads }));
    const [ads, setAds] = useState<NotificationsAds[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            if (index + 1 < ads.length) {
                setIndex(index + 1);
            } else {
                setIndex(0);
            }
        }, 10000);

        return () => clearTimeout(timeout);
    }, [ads.length, index]);

    useEffect(() => {
        if (initialAds.length) setAds(initialAds);
    }, [initialAds]);

    return (
        <div css={styles.container}>
            <div css={styles.imageContainer}>
                {ads.length ? (
                    <AnimatePresence initial={false} exitBeforeEnter>
                        <motion.img
                            key={index}
                            src={ads[index].normal_image_url}
                            srcSet={`${ads[index].image_url} 1029w, ${ads[index].normal_image_url} 1920w, ${ads[index].wide_image_url} 3640w`}
                            sizes="(min-width: 1920px) 3640px, (max-width: 695px) 1029px, 1920px"
                            variants={carouselVariants}
                            transition={carouselTransition}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            alt="ad"
                        />
                    </AnimatePresence>
                ) : (
                    <Skeleton />
                )}
            </div>

            <div css={styles.pagination}>
                {ads.map((image, i) => (
                    <div key={image.id} css={styles.dot(i === index)} />
                ))}
            </div>
        </div>
    );
};

export default HeaderCarousel;
