import {client} from "../../services";
import {setUserInfoAction, setUserIsLoggedInAction} from "./actions";

export const getUserInfo = () => async (dispatch: any) => {
    const response = await client.get('/user/me');

    if (response.status === 200) {
        dispatch(setUserInfoAction(response.data));
        dispatch(setUserIsLoggedInAction(true));
    } else {
        console.error('error', response);
        dispatch(setUserInfoAction({}));
        dispatch(setUserIsLoggedInAction(false));
    }
};