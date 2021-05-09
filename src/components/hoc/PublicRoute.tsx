import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

interface PublicRoutePropType extends RouteProps {
    isLoggedIn: boolean;
    component: React.ComponentType<RouteComponentProps<{}>>;
    // role: string;
}

const PublicRoute: React.FC<PublicRoutePropType> = ({
    component: Component,
    isLoggedIn,
    // role,
    ...rest 
}) => {
    return  (
        <Route
        {...rest}
        render={(props: RouteComponentProps<{}>) =>
            !isLoggedIn ? <Component {...props} /> :
            <Redirect to={''} />
        }
        />
    )
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps)(PublicRoute);