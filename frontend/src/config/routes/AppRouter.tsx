import {lazy} from 'react';

import {Navigate, useRoutes} from 'react-router-dom';
import pathConstants from "./pathConstants.tsx";

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const Profile = lazy(() => import('../../pages/Profile'));

export default function AppRouter() {
    return useRoutes([
        {
            path: "/",
            element: <Navigate to="/dashboard"/>
        },
        {
            path: pathConstants.LOGIN,
            element: <Navigate to="/dashboard"/>
        },
        {
            path: pathConstants.REGISTER,
            element: <Navigate to="/dashboard"/>
        },
        {
            path: pathConstants.DASHBOARD,
            element: <Dashboard/>
        },
        {
            path: pathConstants.PROFILE,
            element: <Profile/>
        }
    ]);
}