import * as yup from "yup";

export const LoginSchema = yup.object().shape({
	username: yup
		.string()
		.email("Must be a valid email")
		.required("Email is required"),
	password: yup.string().required("Password is required")
});