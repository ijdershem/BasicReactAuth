import React from "react";
import { ErrorMessage, InjectedFormikProps } from "formik";
import { Col, Container, Input, Row } from "reactstrap";




export interface ILoginFormElementsValues {
    username: string;
    password: string;
}

interface ILoginFormElementsProps {

}

const LoginFormElements: React.FC<InjectedFormikProps<ILoginFormElementsProps, ILoginFormElementsValues>> = (props) => {

    const {
        values: { username, password },
        handleChange,
        touched,
        errors,
    } = props;


    return (
        <Container className="auth-form">
            <Row>
                <Col>
                    <Row className="form-element">
                        <p>Email</p>
                        <Input
                            label="Email address"
                            name="username"
                            placeholder="Your Email"
                            value={username}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"username"} render={error => <small>{error}</small>} />
                    </Row>
                    <Row className="form-element">
                        <p>Password</p>
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            value={password}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"password"} render={error => <small>{error}</small>} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default LoginFormElements;