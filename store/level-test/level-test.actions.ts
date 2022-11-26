import cookie from "js-cookie";
import shuffle from "lodash.shuffle";
import { ThunkDispatch } from "redux-thunk";

import { QuizQuestion } from "@/interfaces/courses.interfaces";
import { DispatchType } from "@/interfaces/redux.interfaces";
import { SET_QUESTIONS, SET_UPCOMING_QUESTIONS } from "@/store/level-test/level-test.action-types";
import { fetchUserDataAsync } from "@/store/user/user.actions";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { emptyFunction } from "@/utils/index";

export const onSetQuestions = (questions: QuizQuestion[]) => ({
    type: SET_QUESTIONS,
    payload: questions,
});

export const onSetUpcomingQuestions = (questions: QuizQuestion[]) => ({
    type: SET_UPCOMING_QUESTIONS,
    payload: questions,
});

export const fetchLevelTestQuestionsAsync = (
    level: string,
    isUpcomingQuestions = false,
    onSuccess: () => void = emptyFunction,
    onFailure: () => void = emptyFunction
) => {
    return async (dispatch: DispatchType) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            const { data } = await instance.get(endpoints.levelTest.getQuestions(level));

            const onSetQuizQuestions = !isUpcomingQuestions ? onSetQuestions : onSetUpcomingQuestions;

            dispatch(onSetQuizQuestions(shuffle(data?.data as QuizQuestion[])));
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};

export const handleSaveLevelTestResults = (
    level: string,
    onSuccess: () => void = emptyFunction,
    onFailure: () => void = emptyFunction
) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        const token = cookie.get("token");
        const instance = createAxiosInstance(token);

        try {
            await instance.post(endpoints.levelTest.saveResult, { passed_level: level });

            dispatch(fetchUserDataAsync());
            onSuccess();
        } catch (e) {
            console.log(e);
            onFailure();
        }
    };
};
