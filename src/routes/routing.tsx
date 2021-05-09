import React from 'react';
import { IRoutes } from '../interfaces/routes';
import Dashboard from './dashboard/dashboard';
import { routes } from './routes';

let AppRoutes: IRoutes = [
    {
        component: Dashboard,
        path: routes.DASHBOARD,
        name: "Dashboard",
        icon: "icon-nav-dashboard",
        atBottom: false,
    },
    { 
        path: '/app',
        redirect: routes.DEFAULT,
        name: "",
        component: null,
        icon: "",
        atBottom: false,
    }
]

export default AppRoutes;