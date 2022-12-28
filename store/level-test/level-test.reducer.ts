import { ActionType, LevelTestState } from "@/interfaces/redux.interfaces";
import { SET_QUESTIONS, SET_UPCOMING_QUESTIONS } from "@/store/level-test/level-test.action-types";

const initialState: LevelTestState = {
    questions: [],
    upcomingQuestions: [],
};

const levelTestReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return { ...state, questions: [...state.questions, ...action.payload] };
        case SET_UPCOMING_QUESTIONS:
            return { ...state, upcomingQuestions: action.payload };
        default:
            return state;
    }
};

export default levelTestReducer;
