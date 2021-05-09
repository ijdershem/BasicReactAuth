import { RouteComponentProps } from "react-router-dom";

export interface IRoute {
	path: string;
	name: string;
	icon?: React.ComponentElement<any, any> | string;
	component: React.FunctionComponent | React.ComponentClass | null;
	redirect?: string;
	roles?: string[];
	atBottom?: Boolean;
	upgrade_path?: string;
	permission_name?: string;
	upgrade_component?:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>;
	locked_for?: string[];
	includeSpace?: boolean;
}

export type IRoutes = IRoute[];