import LoginForm from '../../components/forms/auth/login.form';
import { Card, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import RegisterForm from '../../components/forms/auth/register.form';
import Grid from '@mui/material/Grid2';
import LogoUi from '../../components/logo/logo.ui';
import { listFaction } from '../../service/spacetraders/factions.service';
import { Faction } from '../../service/dto/faction.dto';

function AuthPage() {
    const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true);
    const [factionList, setFactionList] = useState<Faction[]>([]);

    const fetchFactionList = async () => {
        const factions = await listFaction();
        setFactionList(factions.data);
    };

    useEffect(() => {
        if (0 == factionList.length) {
            fetchFactionList();
        }
    }, []);

    return (
        <Grid
            container
            alignItems={'center'}
            justifyContent={'center'}
            height={'100vh'}
        >
            <Grid size={3}>
                <Card>
                    <Grid
                        container
                        direction={'column'}
                        p={4}
                        gap={2}
                        alignItems={'center'}
                    >
                        <LogoUi />
                        {isLoggingIn ? (
                            <>
                                <LoginForm />
                                <Link
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setIsLoggingIn(!isLoggingIn)}
                                    color={'primary'}
                                >
                                    No token ? Register a new agent.
                                </Link>
                            </>
                        ) : (
                            <>
                                <RegisterForm factionList={factionList} />
                                <Link
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setIsLoggingIn(!isLoggingIn)}
                                    color={'primary'}
                                >
                                    Already registered ? Log in with your token.
                                </Link>
                            </>
                        )}
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
}

export default AuthPage;
