import axios, { AxiosInstance, AxiosError } from "axios";
import { error } from '../../utils/notification';
import config from '../../utils/config';
import storage from '../../utils/storage';
import { ILoginUserResponse } from "../../interfaces/user";
import { stringify } from "querystring";

export class Api {
	protected http: AxiosInstance;

	constructor() {
		this.http = axios.create({
			baseURL: config.baseURI,
			headers: {
				"Content-Type": "application/json"
			},
			timeout: 0
		});

		this.addInterceptors();
	}

	private addInterceptors() {
		this.http.interceptors.request.use((config) => {
			const accessToken = storage.getItem("access_token");
			if (accessToken) {
				config.headers.authorization = accessToken;
			}
			return config;
		});

		// refresh token on 401
		this.http.interceptors.response.use(
			(response: any) => {
				return response;
			},
			(err) => {
				return new Promise((resolve, reject) => {
					const originalReq = err.config;
					if (
						err.response.status === 401 &&
						err.config &&
						!err.config.__isRetryRequest &&
						err.response.data.detail === "INVALID TOKEN"
					) {
						originalReq._retry = true;
						let res = fetch(config.api.endpoints.auth.refreshToken, {
							method: "POST",
							headers: {
								"Content-Type":
									"application/x-www-form-urlencoded;charset=UTF-8"
							},
							body: stringify({
								refresh_token: storage.getItem("refresh_token")
							})
						})
							.then((res) => res.json())
							.then((res) => {
								this.setSession(res);
								return this.http.request(originalReq);
							});
						resolve(res);
					}
					reject(err);
				});
			}
		);
	}

	setSession({ access_token, refresh_token }: ILoginUserResponse) {
		storage.setItem("access_token", access_token);
		storage.setItem("refresh_token", refresh_token);
	}

	handleError(err: AxiosError, title?: string) {
		console.log(err);
		if (!err.response) {
			return error("Please check your internet connection");
		}

		if (err.response.status === 401) {
			// storage.clear();
			// window.location.reload();
			// error("Your credentials have expired");
		}

		if (err.response.status >= 500) {
			return error({
				title: title || "",
				description: "Something went wrong"
			});
		}

		if (
			err.response.data.message === "Unauthorized access for Journey food Admin"
		) {
			return;
		}

		if (err.response.status === 404) {
			return error("Resource doesn't exist");
		}

		if (err.response.data.message) {
			// Temporary handling/replacement message for a user who has not been verified
			if (err.response.data.message === "User is not verified by admin") {
				return error(
					{
						title: "Login Error:",
						description:
							"Thank you for registering, please check your email for next steps"
					},
					{
						type: "warning",
						timeout: 5000
					}
				);
			}
			return error({
				title: title || "",
				description: err.response.data.message
			});
		}
		error({
			title: title || "",
			description: err.response.data
		});
	}
}
