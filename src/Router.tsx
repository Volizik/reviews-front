import {RouteProps} from "react-router";
import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {AuthLayout} from "./layouts/AuthLayout";
import {MainLayout} from "./layouts/MainLayout";
import {Main} from "./pages/Main";

interface RouteWrapperProps extends RouteProps {
    page: any;
    layout: any;
}
const RouteWrapper: FC<RouteWrapperProps> = ({
    page: Component,
    layout: Layout,
    ...rest
}) => {
    return (
        <Route {...rest} render={(props) => (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        )} />
    );
};

export const Router: FC = () => (
    <Switch>
        <RouteWrapper path="/" page={Main} layout={MainLayout} exact />
        <RouteWrapper path="/login" page={Login} layout={AuthLayout} />
        <RouteWrapper path="/registration" page={Registration} layout={AuthLayout} />
    </Switch>
);