import { motion, Variants } from "framer-motion";
import { useState } from "react";

import { contentsVariant, illuVariants, landingAnimationConfig } from "@/components/common/FramerMotion";
import MinusIcon from "@/public/icons/minus.svg";
import PlusIcon from "@/public/icons/plus.svg";
import DotsIllu from "@/public/images/faq-dots.svg";
import FAQIllu from "@/public/images/landing-illu-6.svg";

import * as styles from "./FAQSection.styles";

const FAQSection = () => {
    const [expandedQuestion, setExpandedQuestion] = useState(0);

    const onQuestionClick = (id: number) => {
        if (expandedQuestion === id) {
            setExpandedQuestion(0);
            return;
        }
        setExpandedQuestion(id);
    };

    return (
        <section css={styles.container} id="faq">
            <motion.div css={styles.illuContainer} variants={illuVariants} {...landingAnimationConfig}>
                <FAQIllu />
            </motion.div>
            <motion.div css={styles.contents} variants={contentsVariant} {...landingAnimationConfig}>
                <div css={styles.questionsContainer}>
                    {faqs.map(({ id, question, answer }) => (
                        <div key={id} css={styles.item}>
                            <div css={styles.itemHeader} onClick={() => onQuestionClick(id)}>
                                <div css={styles.question}>{question}</div>
                                <div css={styles.iconContainer}>
                                    {expandedQuestion === id ? <MinusIcon /> : <PlusIcon />}
                                </div>
                            </div>
                            <motion.p
                                css={styles.answer}
                                variants={answerVariants}
                                transition={transition}
                                animate={expandedQuestion === id ? "open" : "close"}>
                                {answer}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div css={styles.dots}>
                <DotsIllu />
            </div>
        </section>
    );
};

const answerVariants: Variants = {
    close: {
        height: "0px",
        marginTop: "0px",
    },
    open: {
        height: "auto",
        marginTop: "1rem",
    },
};

const transition = {
    type: "spring",
    bounce: 0.2,
    duration: 0.6,
};

const faqs = [
    {
        id: 1,
        question: "How do I register with SAYA English?",
        answer: "Registration process is very simple. Provide the phone number, fill in the OTP and your account is ready.",
    },
    {
        id: 2,
        question: "How do I access the course? ",
        answer: "There are two ways to access the course: through the campus (web version) and through the app (mobile version). Your login details are always the same for both platforms and your progress will automatically sync.",
    },
    {
        id: 3,
        question: "How should I start if I am a beginner?",
        answer: "Our courses are designed to suit our students’ level perfectly. Having little or no previous contact with the English language isn’t a problem.",
    },
    {
        id: 4,
        question: "Are the courses in Myanmar Language? ",
        answer: "Our courses are designed by both local and International teachers who understand Myanmar students’ requirement well. ",
    },
    {
        id: 5,
        question: "Do I need to join all Live Classes? ",
        answer: "Live classes are to support your learning journey. We recommend joining most of the classes but it’s not mandatory to join. Join the classes of skill that you feel you are weak at.",
    },
];

export default FAQSection;
