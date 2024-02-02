import { useSelector } from 'react-redux';
import AuthRouter from "./AuthRouter.tsx";
import AppRoutes from "./AppRouter.tsx";

const Routes = () => {
    const { user } = useSelector((state: any) => state.auth);

    console.log(
        '🚀 Welcome to Client Management System. By Waziaq'
    );

    if (!user)
        return (
            <AuthRouter />
        );
    else {
        return <AppRoutes />
    }
}

export default Routes;
