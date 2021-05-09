import { InjectedFormikProps, withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Form, Row } from 'reactstrap';
import { ILoginRequest, ILoginUserResponse } from '../../../interfaces/user';
import userService from '../../../services/userService';
import { LoginSchema } from '../../../validations/loginValidation';
import { routes } from '../../routes';
import LoginFormElements, { ILoginFormElementsValues } from './loginFormElements';

interface ILoginFormProps {
    login: (request: ILoginRequest, resolve?: Function, reject?: Function) => Promise<ILoginUserResponse>
}

const LogIn:React.FC<
    InjectedFormikProps<ILoginFormProps, ILoginFormElementsValues>
> = (props) => {

    const handleSubmit = () => {
        props.handleSubmit();
    }

    return (
        <Card className="auth-card">
            <CardBody>
                <div className="d-flex flex-row justify-content-center">Log In</div>
                <Form>
                    <LoginFormElements {...props} />
                </Form>
                <Row className="d-flex flex-row justify-content-center">
                    <Button className={"mr-2 mb-4"} onClick={() => handleSubmit()} loading={props.isSubmitting ? 1 : 0} disabled={!props.isValid}>
                        Login
                    </Button>
                </Row>
                <Link to={routes.REGISTER}>
                    <p className="text-center">Don't have an account? Create one</p>
                </Link>
            </CardBody>
        </Card>
    )

}

const WrappedForm = withFormik<ILoginFormProps, ILoginFormElementsValues>({
    enableReinitialize: true,
    validationSchema: LoginSchema,
    mapPropsToValues: () => ({
        username: '',
        password: ''
    }),
    handleSubmit: async ({
        username,
        password
    }, { props, setSubmitting }) => {

        setSubmitting(true)
        await props.login({
            password,
            username,
        });
        setSubmitting(false);
    }
})

const mapDispatchToProps = (dispatch: any) => ({
    login: ({ username, password }: ILoginRequest, resolve?: Function) => dispatch(userService.login(username, password, resolve))
})

export default connect(null, mapDispatchToProps)(WrappedForm(LogIn));