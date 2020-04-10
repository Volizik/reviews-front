import {RouteProps} from "react-router";
import React, {FC} from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {AuthLayout} from "./layouts/AuthLayout";
import {MainLayout} from "./layouts/MainLayout";
import {CreateReview} from "./pages/CreateReview";
import {FullReview} from "./pages/FullReview";
import {useSelector} from "react-redux";
import {AppState} from "./store";
import {Reviews} from "./pages/Reviews";

interface RouteWrapperProps extends RouteProps {
    page: any;
    layout: any;
    privateRoute?: boolean;
}
const RouteWrapper: FC<RouteWrapperProps> = ({
    page: Component,
    layout: Layout,
    privateRoute = false,
    ...rest
}) => {
    const isLoggedIn = useSelector<AppState, boolean>(state => state.user.isLoggedIn);
/*TODO: fix private routes*/
    return (
        <Route {...rest} render={(props) => (
            <Layout {...props}>
                {privateRoute ? isLoggedIn ? <Component {...props} /> : <Redirect to='/login' /> : <Component {...props} /> }
            </Layout>
        )} />
    );
};

export const Router: FC = () => (
    <Switch>
        <RouteWrapper path="/" page={Reviews} layout={MainLayout} exact />
        <RouteWrapper path="/review/add" page={CreateReview} layout={MainLayout} exact />
        <RouteWrapper path="/review/:id" page={FullReview} layout={MainLayout} />
        <RouteWrapper path="/login" page={Login} layout={AuthLayout} />
        <RouteWrapper path="/registration" page={Registration} layout={AuthLayout} />
    </Switch>
);