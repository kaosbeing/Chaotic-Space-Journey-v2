import { Grid2 as Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <>
            <Grid container alignItems={'center'} justifyContent={'center'} height={'100%'}>
                <Outlet />
            </Grid>
        </>
    );
}