import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@/components/common/Avatar/Avatar.component";
import Button from "@/components/common/Button/Button.component";
import RadioButton from "@/components/common/RadioButton/RadioButton.component";
import SimpleFileInput from "@/components/common/SimpleFileInput/SimpleFileInput.component";
import { ReduxState } from "@/interfaces/redux.interfaces";
import PencilIcon from "@/public/icons/create.svg";
import { userUpdateProfileAsync } from "@/store/user/user.actions";

import * as styles from "./EditProfileForm.styles";

const EditProfileForm = () => {
    const userData = useSelector((state: ReduxState) => state.userState.userData);
    const dispatch = useDispatch();
    const router = useRouter();

    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [gender, setGender] = useState<"male" | "female">(userData.gender);
    const [avatar, setAvatar] = useState<string>(userData.photo);
    const [imageFile, setImageFile] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onGenderChange = (gender: "male" | "female") => setGender(gender);

    const onAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];

            if (!file) return;

            setImageFile(file);
            setAvatar(URL.createObjectURL(file));
        }
    }, []);

    const isSaveBtnDisabled = useMemo(
        () =>
            userData.name === name &&
            userData.email === email &&
            userData.gender === gender &&
            userData.photo === avatar,
        [avatar, email, gender, name, userData.email, userData.gender, userData.name, userData.photo]
    );

    const onUpdateSuccess = () => {
        setIsLoading(false);
    };

    const onUpdateFailure = () => {
        setIsLoading(false);
    };

    const onSave = useCallback(
        (e: FormEvent) => {
            e.preventDefault();

            setIsLoading(true);

            dispatch(
                userUpdateProfileAsync(
                    { name, email, image: imageFile as string, gender },
                    onUpdateSuccess,
                    onUpdateFailure
                )
            );
        },
        [dispatch, email, gender, imageFile, name]
    );

    const onCancel = () => router.back();

    useEffect(() => {
        if (userData.photo !== avatar) setAvatar(userData.photo);
    }, [userData.photo]);

    return (
        <form css={styles.form} onSubmit={onSave}>
            <div css={styles.avatarContainer}>
                <div css={styles.avatar}>
                    <Avatar src={avatar} hasBorder={false} />
                    <SimpleFileInput accept="image/x-png,image/jpeg,image/jpg" onChange={onAvatarChange}>
                        <span css={styles.uploadIcon}>
                            <PencilIcon />
                        </span>
                    </SimpleFileInput>
                </div>
                <div css={styles.col}>
                    <span css={styles.name}>{userData.name}</span>
                    <span>{userData.is_premium ? "premium user" : "Free user"}</span>
                </div>
            </div>
            <div css={styles.col}>
                <label css={styles.label} htmlFor="name">
                    Name
                </label>
                <input
                    css={styles.input}
                    id="name"
                    type="text"
                    value={name}
                    onChange={onNameChange}
                    required
                />
            </div>
            <div css={styles.col}>
                <label css={styles.label} htmlFor="email">
                    Email
                </label>
                <input css={styles.input} id="email" type="email" value={email} onChange={onEmailChange} />
            </div>
            <div css={styles.col}>
                <span css={styles.genderTitle}>Select gender</span>
                <div css={styles.row}>
                    <div css={styles.radioContainer}>
                        <RadioButton
                            id="maleRadio"
                            checked={gender === "male"}
                            radioSize="2rem"
                            onChange={() => onGenderChange("male")}
                            showRadio
                        />
                        <label htmlFor="maleRadio">Male</label>
                    </div>
                    <div css={styles.radioContainer}>
                        <RadioButton
                            id="femaleRadio"
                            checked={gender === "female"}
                            radioSize="2rem"
                            onChange={() => onGenderChange("female")}
                            showRadio
                        />
                        <label htmlFor="femaleRadio">Female</label>
                    </div>
                </div>
            </div>

            {/* <div css={styles.linkContainer}> */}
            {/*    <a>Change Phone number ?</a> */}
            {/* </div> */}

            <div css={styles.buttonsContainer}>
                <Button variant="contained" isDisabled={isSaveBtnDisabled} loading={isLoading} type="submit">
                    Save
                </Button>
                <Button type="button" onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default EditProfileForm;
