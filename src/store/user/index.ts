import {UserActionTypes} from "./types";

interface Info {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserInfo = Info | {};

export interface UserState {
    info: UserInfo;
    isLoggedIn: boolean;
}
const initialState: UserState = {
    info: {},
    isLoggedIn: false
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case 'SET_USER_INFO':
            return {
                ...state,
                info: action.payload
            };
        case 'SET_USER_IS_LOGGED_IN':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};