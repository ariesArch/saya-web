import { differenceInSeconds } from "date-fns";

import { Chapter, QuizPayloadData, QuizSummary } from "@/interfaces/courses.interfaces";
import { numToArrOfNum } from "@/utils/index";

export const calculateQuizSummary = (quizPayloadData: QuizPayloadData): QuizSummary => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    const totalNumberOfQuestions = quizPayloadData.practices.length;
    let totalTime = 0;

    quizPayloadData.practices.forEach((item) => {
        if (item.isAnswer) {
            correctAnswers += 1;
        } else {
            incorrectAnswers += 1;
        }
        totalTime += differenceInSeconds(
            new Date(item.ended_practice_at),
            new Date(item.started_practice_at)
        );
    });

    return {
        correctAnswers,
        incorrectAnswers,
        averageCorrectness: Math.round((correctAnswers / totalNumberOfQuestions) * 100),
        averageSpeed: Math.round(totalTime / totalNumberOfQuestions),
    };
};

export const getNextLessonId = (chapters: Chapter[], lessonId: string): string | null => {
    let nextId: string | null = null;
    let currentMaterialIndex: number | null = null;
    let contIndex: number | null = null;

    if (!chapters) return null;

    chapters.forEach((chapter, contentIndex) => {
        chapter.lessons.forEach((item, i) => {
            if (item.id === lessonId) {
                currentMaterialIndex = i;
                contIndex = contentIndex;
            }
        });
    });

    // if we can find the match for currentLesson's index and current chapter's id
    if (currentMaterialIndex !== null && contIndex !== null) {
        const currentMaterials = chapters[contIndex].lessons;

        // if this is the last lesson of the chapter
        if (currentMaterials.length === currentMaterialIndex + 1) {
            if (!chapters[contIndex + 1]) return null;

            nextId = chapters[contIndex + 1].lessons[0].id;
        } else {
            nextId = currentMaterials[currentMaterialIndex + 1].id;
        }
    }
    return nextId;
};

// turns a number into a string of underscores
const numToUnderscores = (str: string) =>
    numToArrOfNum(str.length)
        .map(() => "_")
        .join("");

export const renderFillInTheBankQuestion = (
    question: string,
    isSelected: boolean,
    isTempAnswerSelected: boolean,
    correctAnswer: string,
    selectedAnswer: string
) => {
    const replaceableStr = !isSelected
        ? `<span style="position: relative; font-size: 3.5rem; line-height: 0.1rem; white-space: nowrap">&nbsp;&nbsp;${numToUnderscores(
              correctAnswer
          )}${
              isTempAnswerSelected
                  ? `<span style="font-size: 2.5rem; position: absolute; top: calc(50% + 0.4rem); left: 50%; transform: translate(-50%, -50%)">${selectedAnswer}</span>`
                  : ""
          }&nbsp;&nbsp;</span>`
        : `<span style="color: var(--color-green); white-space: nowrap">${correctAnswer}</span>`;

    return question.replace("[__]", replaceableStr);
};
