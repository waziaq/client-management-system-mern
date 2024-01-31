import { useSelector } from 'react-redux';
import AuthRouter from "./AuthRouter.tsx";
import AppRoutes from "./AppRouter.tsx";

const Routes = () => {
    const { isAuthenticated } = useSelector((state: any) => state.auth);

    console.log(
        '🚀 Welcome to Client Management System. By Waziaq'
    );

    if (!isAuthenticated)
        return (
            <AuthRouter />
        );
    else {
        return <AppRoutes />
    }
}

export default Routes;
