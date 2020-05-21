import { RouteProps } from 'react-router';
import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { AuthLayout } from './layouts/AuthLayout';
import { MainLayout } from './layouts/MainLayout';
import { CreateReview } from './pages/CreateReview';
import { FullReview } from './pages/FullReview';
import { Reviews } from './pages/Reviews';
import { isAuthenticated } from './services/auth';
import { EditReview } from './pages/EditReview';
import { Workers } from './pages/Workers';
import { MyReviews } from './pages/MyReviews';

interface CustomRouteProps extends RouteProps {
    page: FC<any>;
    layout: FC<any>;
}
interface PrivateRouteProps extends CustomRouteProps {}
interface PublicRouteProps extends CustomRouteProps {
    restricted?: boolean;
}

const PrivateRoute: FC<PrivateRouteProps> = ({
    page: Component,
    layout: Layout,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props}>
                    {isAuthenticated() ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to='/login' />
                    )}
                </Layout>
            )}
        />
    );
};

const PublicRoute: FC<PublicRouteProps> = ({
    page: Component,
    layout: Layout,
    restricted = false,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout {...props}>
                    {restricted ? (
                        <Redirect to='/' />
                    ) : (
                        <Component {...props} />
                    )}
                </Layout>
            )}
        />
    );
};

export const Router: FC = () => (
    <Switch>
        <PublicRoute path='/' page={Workers} layout={MainLayout} exact />
        <PublicRoute
            path='/worker/:id'
            page={Reviews}
            layout={MainLayout}
            exact
        />
        <PrivateRoute
            path='/review/my'
            page={MyReviews}
            layout={MainLayout}
            exact
        />
        <PrivateRoute
            path='/review/add'
            page={CreateReview}
            layout={MainLayout}
            exact
        />
        <PrivateRoute
            path='/review/edit/:id'
            page={EditReview}
            layout={MainLayout}
            exact
        />
        <PublicRoute path='/review/:id' page={FullReview} layout={MainLayout} />
        <PublicRoute
            path='/login'
            page={Login}
            layout={AuthLayout}
            restricted={isAuthenticated()}
        />
        <PublicRoute
            path='/registration'
            page={Registration}
            layout={AuthLayout}
            restricted={isAuthenticated()}
        />
    </Switch>
);
