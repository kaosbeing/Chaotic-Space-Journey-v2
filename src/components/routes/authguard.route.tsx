import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../service/auth.context.provider';

const AuthGuard = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

export default AuthGuard;
