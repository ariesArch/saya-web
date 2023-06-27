import { ActionType, CountryCodeState } from "@/interfaces/redux.interfaces";
import { SET_COUNTRY_CODES } from "@/store/country-code/country-codes.action-types";

const initialState: CountryCodeState = {
    countryCodes: [],
};

const countryCodesReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_COUNTRY_CODES:
            return {
                ...state,
                countryCodes: action.payload,
            };
        default:
            return state;
    }
};

export default countryCodesReducer;
