import { Api } from "./api";
import config from "../utils/config";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { stringify } from "querystring";
import {
	ILoginUserResponse,
} from "../interfaces/user";

export class UserApi extends Api {
	login(
		username: string,
		password: string,
		resolve?: Function,
	) {
		return async (dispatch: Dispatch) => {
			try {
				const response: AxiosResponse<ILoginUserResponse> = await this.http.post(
					config.api.endpoints.auth.login,
					stringify({
						email: username,
						password
					}),
					{
						headers: {
							"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
						}
					}
				);
				this.setSession(response.data);
				if (resolve) {
					resolve(response);
				}
			} catch (error) {
				this.handleError(error, "Login Error");
			}
		};
	};

	register = (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		resolve?: Function,
	) => { 
		return async (dispatch: Dispatch) => {
			try {
				const body = {
					firstName: firstName,
					lastName: lastName, 
					email: email,
					password: password,
					roles: ['user']
				}
				const response: AxiosResponse<any> = await this.http.post(config.api.endpoints.auth.register, body);
				if (resolve) {
					resolve(response);
				}
			} catch (error) {
				this.handleError(error, "Login Error");
			}

		}
	}
}

export default new UserApi();
