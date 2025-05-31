import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import AuthPage from './pages/auth/auth.page';
import { RouterProvider } from 'react-router';
import DefaultLayout from './layouts/default.layout';
import ProtectedRoute from './components/routes/protected.route';
import DashboardPage from './pages/dashboard/dashboard.page';
import AuthGuard from './components/routes/authguard.route';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />,
                    },
                ],
            },
            {
                path: 'auth',
                element: <AuthGuard />,
                children: [
                    {
                        index: true,
                        element: <AuthPage />,
                    },
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
