import { History } from "history";
import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";

export interface IReduxState {
	router: RouterState;
}

export interface IApplicationState {

}

export const createRootReducer = (history: History) => {
	const rootReducer = combineReducers({
		router: connectRouter(history),
	});
	return rootReducer;
};

export const rootReducer = (history: History) => (state: any, action: any) => {
    // TODO: Implement clear redux store on logout action
	// if (action.type === user.LOGOUT_REQUEST) {
	// 	return createRootReducer(history)(undefined, action);
	// }
	return createRootReducer(history)(state, action);
};
