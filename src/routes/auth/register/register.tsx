import { InjectedFormikProps, withFormik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Form, Row } from 'reactstrap';
import { IRegisterRequest } from '../../../interfaces/user';
import userService from '../../../services/userService';
import { RegisterValidation } from '../../../validations/registerValidation';
import { routes } from '../../routes';
import RegisterFormElements, { IRegisterFormElementsValues } from './registerFormElements';

interface IRegisterFormProps {
    register: (request: IRegisterRequest, resolve?: Function, reject?: Function) => Promise<any>
}

const Register:React.FC<
    InjectedFormikProps<IRegisterFormProps, IRegisterFormElementsValues>
> = (props) => {

    const handleSubmit = () => {
        props.handleSubmit();
    }

    return (
        <Card className="auth-card">
            <CardBody>
                <div className="d-flex flex-row justify-content-center">Create an Account</div>
                <Form onSubmit={handleSubmit}>
                    <RegisterFormElements {...props} />
                </Form>
                <Row className="d-flex flex-row justify-content-center">
                    <Button className={"mr-2 mb-4"} onClick={() => handleSubmit()} loading={props.isSubmitting ? 1 : 0} disabled={!props.isValid}>
                        Register
                    </Button>
                </Row>
                <Link to={routes.LOGIN}>
                    <p className="text-center">Already have an account? Sign in</p>
                </Link>

            </CardBody>
        </Card>
    )
}

const WrappedForm = withFormik<IRegisterFormProps, IRegisterFormElementsValues>({
    enableReinitialize: true,
    validationSchema: RegisterValidation,
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }),
    handleSubmit: async ({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    }, { props, setSubmitting }) => {

        setSubmitting(true)
        try {
            await props.register({
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            });
        } 

        finally {
            setSubmitting(false);
        }

    }
})

const mapDispatchToProps = (dispatch: any) => ({
    register: ({ firstName, lastName, email, password }: IRegisterRequest, resolve?: Function) => dispatch(userService.register(firstName, lastName, email, password, resolve))
})

export default connect(null, mapDispatchToProps)(WrappedForm(Register));