export interface InitialPageProps {
    pageProps: any;
    token: string | null | undefined;
}

export interface ReduxState {
    authState: AuthState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}

export interface UserData {
    name: string;
    photo: string;
    email: string;
    phone: string;
    gender: "male" | "female";
    is_verified: boolean;
    enrolled_courses_count: number;
    has_pushy_token: boolean;
    is_premium: boolean;
    show_dialog: boolean;
    end_date: string;
    start_date: string;
    last_order_number: string;
    show_dialog_survey: boolean;
    promotion: {
        has_promotion: boolean;
        title: string;
    };
}

export interface AuthState {
    userData: UserData | {};
}

export interface CommonState {
    currentTime: string;
}
