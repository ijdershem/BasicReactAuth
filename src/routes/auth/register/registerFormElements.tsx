import React from "react";
import { ErrorMessage, InjectedFormikProps } from "formik";
import { Col, Container, Input, Row } from "reactstrap";




export interface IRegisterFormElementsValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IRegisterFormElementsProps {

}

const RegisterFormElements: React.FC<InjectedFormikProps<IRegisterFormElementsProps, IRegisterFormElementsValues>> = (props) => {

    const {
        values: { firstName, lastName, email, password, confirmPassword },
        handleChange,
        touched,
        errors,
    } = props;


    return (
        <Container className="auth-form">
            <Row>
                <Col>
                    <Row className="form-element">
                        <Input
                            label="Email address"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"firstName"} render={error => <small>{error}</small>} />
                    </Row>
                    <Row className="form-element">
                        <Input
                            label="Last Name"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"lastName"} render={error => <small>{error}</small>} />
                    </Row>
                    <Row className="form-element">
                        <Input
                            label="Email address"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"email"} render={error => <small>{error}</small>} />
                    </Row>
                    <Row className="form-element">
                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"password"} render={error => <small>{error}</small>} />
                    </Row>
                    <Row className="form-element">
                        <Input
                            label="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />
                        <ErrorMessage name={"confirmPassword"} render={error => <small>{error}</small>} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}

export default RegisterFormElements;