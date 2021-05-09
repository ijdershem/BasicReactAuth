import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { IReduxState, rootReducer } from "./reducers";
import history from "../utils/history";

/**
 * Create history middleware
 * This enables timetravel using redux devtools
 */
const historyMiddleware = routerMiddleware(history);

/**
 * Enables redux devtools except in production mode
 * Use redux composer if devtools does not exist
 */
const composeEnhancer =
	process.env.NODE_ENV !== "production" &&
	typeof window === "object" &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

/**
 * Takes initial redux state and creates a redux store
 * @param {ReduxState} preloadedState Initial redux state
 */

export const configureStore = (preloadedState?: IReduxState) => {
	const store = createStore(
		rootReducer(history),
		preloadedState,
		composeEnhancer(applyMiddleware(historyMiddleware, thunk))
	);

	return store;
};
