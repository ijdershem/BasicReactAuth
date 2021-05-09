import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import LogIn from "./logIn";
import { routes } from "../routes";
import Register from "./register";
import { Container } from "reactstrap";

const AuthRouter: React.FC<RouteComponentProps> = ({...props}) => {
    return (
        <Container className="auth-container">
            <Switch>
                <Route exact path={routes.LOGIN} 
                    component={LogIn} 
                />
                <Route exact path={routes.REGISTER}
                    component={Register}
                />
                <Redirect exact path="/auth" to={routes.LOGIN} />
            </Switch>
        </Container>
    )
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, null)(AuthRouter);