import * as React from 'react';
import { Route, RouteProps, RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '../../routes/routes';


interface PrivateRoutePropType extends RouteProps {
  isLoggedIn: boolean;
  component: React.ComponentType<RouteComponentProps>;
}

const PrivateRoute: React.FC<PrivateRoutePropType> = ({
    component: Component,
    isLoggedIn,
        ...rest 
}) => {

  return (
    <Route 
      {...rest}
      render={(props: RouteComponentProps) =>
        isLoggedIn ? <Component {...props} /> :
        <Redirect to={routes.LOGIN} /> // Redirect to log in
      }
    />
  )

};


const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

