import {
    createBrowserRouter
} from 'react-router-dom';
import AuthPage from './components/pages/auth/auth.page';
import { RouterProvider } from 'react-router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthPage />
    }
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;

