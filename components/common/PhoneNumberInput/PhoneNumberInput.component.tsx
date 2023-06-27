import Image from "next/image";
import { CSSProperties, FC, HTMLProps, ChangeEvent, useEffect, useState } from "react";
import { ReduxState } from "@/interfaces/redux.interfaces";
import { useDispatch, useSelector } from "react-redux";
// import MyanmarFlag from "@/public/icons/myanmar-flag.png";
import Select from "react-select";

import * as styles from "./PhoneNumberInput.styles";
import { getAllCountryCodesAsync } from "@/store/country-code/country-codes.actions";

interface Props extends HTMLProps<HTMLInputElement> {
    containerStyles?: CSSProperties;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    formatedPhone: (value: number) => void;
}

const PhoneNumberInput: FC<Props> = ({ containerStyles, onChange, formatedPhone }) => {
    const dispatch = useDispatch();

    const { countryCodes } = useSelector((state: ReduxState) => ({
        countryCodes: state.countryCodeState,
    }));

    const { countryCode } = useSelector((state: ReduxState) => ({
        countryCode: state.userState.userData?.country_code,
    }));

    useEffect(() => {
        dispatch(getAllCountryCodesAsync());
    }, []);

    const [selectedOption, setSelectedOption] = useState(null);
    const [options, setOptions] = useState(null);
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const formatData = countryCodes.countryCodes.map((item) => {
            return {
                id: item.id,
                icon: item.thumb_url,
                value: item.country_code,
                text: item.country_code + " " + item.short_name,
            };
        });

        setOptions(formatData);

        if (countryCode != undefined) {
            setSelectedOption({
                id: countryCode.id,
                icon: countryCode.thumb_url,
                value: countryCode.country_code,
                text: countryCode.country_code + " " + countryCode.short_name,
            });
        } else {
            setSelectedOption(formatData[0]);
        }
    }, [countryCodes]);

    function onSelectedCountryCode(e) {
        setSelectedOption(e);
        setPhone("");
    }

    const onChangePhone = (e) => {
        onChange(e);
        setPhone(e.target.value);
        formatedPhone(joinPhoneWithCountryCode(e.target.value));
    };

    function joinPhoneWithCountryCode(phone) {
        let formatPhone = "";

        if (phone[0] === "0") {
            formatPhone = `${phone.substring(1)}`;
        }

        return parseInt(selectedOption.value + formatPhone);
    }

    return (
        <div css={styles.inputContainer} style={containerStyles}>
            <div css={styles.iconContainer}>
                <Select
                    instanceId={1}
                    placeholder="Select Country"
                    value={selectedOption}
                    options={options}
                    onChange={onSelectedCountryCode}
                    // @ts-ignore
                    getOptionLabel={(e) => (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Image src={e.icon} alt="Myanmar Flag" width={10} height={10} />
                            <span style={{ marginLeft: 3 }}>{e.text}</span>
                        </div>
                    )}
                />
                {/* <Image src={MyanmarFlag} alt="Myanmar Flag" />
                <span>+95</span> */}
            </div>
            <input
                value={phone}
                css={styles.input}
                type="number"
                placeholder="Enter Phone Number"
                onChange={onChangePhone}
            />
        </div>
    );
};

export default PhoneNumberInput;
