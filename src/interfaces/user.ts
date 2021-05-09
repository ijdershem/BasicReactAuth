export interface ILoginUserResponse {
	access_token: string;
	refresh_token: string;
}

export interface ILoginRequest {
	username: string;
	password: string;
}

export interface IRegisterRequest {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}