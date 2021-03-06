import * as yup from "yup";

export const RegisterValidation = yup.object().shape({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	email: yup
		.string()
		.email("Email must be a valid email")
		.required("Email is required"),
	password: yup.string().required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
});