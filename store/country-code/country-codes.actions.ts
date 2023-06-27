import { DispatchType } from "@/interfaces/redux.interfaces";
import {
    SET_COUNTRY_CODES,
    SET_SELECTED_COUNTRY_CODES,
} from "@/store/country-code/country-codes.action-types";
import { createAxiosInstance, endpoints } from "@/utils/api";
import { CountryCodeData } from "@/interfaces/country-code.interfaces";

export const setCountryCodes = (country_codes: CountryCodeData[]) => ({
    type: SET_COUNTRY_CODES,
    payload: country_codes,
});

export const getAllCountryCodesAsync = () => {
    return async (dispatch: DispatchType) => {
        const instance = createAxiosInstance();

        try {
            const { data } = await instance.get(endpoints.countryCode.getCountryCode);

            // const formatData = data.data.map((item) => {
            //     return {
            //         id: item.id,
            //         icon: item.thumb_url,
            //         value: item.country_code,
            //         text: item.country_code + " " + item.short_name,
            //     };
            // });

            dispatch(setCountryCodes(data?.data as CountryCodeData[]));
        } catch (e) {
            console.log(e);
        }
    };
};
