import { ConnectedRouter } from 'connected-react-router';
import history from "../utils/history";
import { PublicRoute, PrivateRoute } from '../components/hoc';
import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '../components/header';
import App from './app';
import AuthRouter from './auth';
import { routes } from './routes';
import { Container } from 'reactstrap';

const Router:React.FC = ({...props})  => {
  return (
    <ConnectedRouter history={history}>
      <Container className="app-container">
        <HeaderComponent/>
        <Switch>
            <PublicRoute path={routes.AUTH} isLoggedIn={false} component={AuthRouter} />
            <PrivateRoute path={routes.DEFAULT} isLoggedIn={false} component={App} />
            <Redirect exact path="/" to={routes.DEFAULT} />
        </Switch>
      </Container>

    </ConnectedRouter>
  );
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps)(Router);
