import { ReactElement, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getAgent } from './spacetraders/agent.api';
import { AuthContext } from './auth.context';

interface AuthContextProviderProps {
    children: ReactElement;
}

export function AuthContextProvider({ children }: Readonly<AuthContextProviderProps>) {
    const [token, setToken] = useState<string>(localStorage.getItem('agent-token') ?? '');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (token && token.length != 0) {
            setIsLoggedIn(true);
        }
    }, [token]);

    // Get agent using token in arguments
    async function login(token: string): Promise<void> {
        try {
            const response = await getAgent(token);
            if (response) {
                localStorage.setItem('agent-token', token);
                setToken(token);
                setIsLoggedIn(true);
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    }

    function logout(): void {
        setToken('');
        localStorage.removeItem('agent-token');
        navigate('/login');
    }

    return <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
        {children}
    </AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);