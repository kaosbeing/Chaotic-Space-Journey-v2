import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from '../service/auth.context.provider';

export default function DefaultLayout() {
    return (
        <>
            <AuthContextProvider>
                <Outlet />
            </AuthContextProvider>
        </>
    );
}
