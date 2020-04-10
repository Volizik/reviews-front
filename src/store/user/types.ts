export interface SetUserInfoAction {
    type: 'SET_USER_INFO';
    payload: {};
}
export interface SetUserIsLoggedInAction {
    type: 'SET_USER_IS_LOGGED_IN';
    payload: boolean;
}

export type UserActionTypes = SetUserInfoAction | SetUserIsLoggedInAction;