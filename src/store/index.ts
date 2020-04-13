import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import {workerReducer} from "./worker";
import {userReducer} from "./user";
import {reviewReducer} from "./review";

export const rootReducer = combineReducers({
    worker: workerReducer,
    user: userReducer,
    review: reviewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const configureStore = () => {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
};
