import { SetUserInfoAction, SetUserIsLoggedInAction } from './types';
import { UserInfo } from './index';

export const setUserInfoAction = (payload: UserInfo): SetUserInfoAction => {
    return {
        type: 'SET_USER_INFO',
        payload: payload,
    };
};
export const setUserIsLoggedInAction = (
    payload: boolean,
): SetUserIsLoggedInAction => ({
    type: 'SET_USER_IS_LOGGED_IN',
    payload: payload,
});
