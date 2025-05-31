import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../service/auth.context.provider';

const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
