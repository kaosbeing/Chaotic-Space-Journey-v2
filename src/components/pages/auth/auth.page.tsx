import React, { useState } from 'react';
import LoginForm from '../../forms/auth/login.form';
import RegisterForm from '../../forms/auth/register.form';

function AuthPage() {
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    return <>
        {isLoggingIn ? <LoginForm /> : <RegisterForm />}
    </>;
}

export default AuthPage;
