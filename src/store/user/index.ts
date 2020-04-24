import {UserActionTypes} from "./types";

export type UserInfo = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};

export interface UserState {
    info: UserInfo;
    isLoggedIn: boolean;
}
const initialState: UserState = {
    info: {
        id: '',
        email: '',
        firstName: '',
        lastName: ''
    },
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