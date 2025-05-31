import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAuth } from '../../../service/auth.context.provider';

const LoginForm = () => {
    const { login } = useAuth();

    interface Login {
        token: string;
    }

    const initialValues: Login = {
        token: '',
    };

    const onSubmit = async (data: Login, helpers: FormikHelpers<Login>) => {
        helpers.setSubmitting(true);
        await login(data.token);
        helpers.setSubmitting(false);
    };

    return (
        <Grid
            container
            gap={2}
            direction={'column'}
            alignItems={'center'}
            width={'100%'}
        >
            <Grid>
                <Typography color={'primary'} fontWeight={'bold'}>
                    Login with a token
                </Typography>
            </Grid>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, handleSubmit, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Grid
                            container
                            spacing={2}
                            direction={'column'}
                            gap={2}
                        >
                            <TextField
                                required
                                label={'Token'}
                                name={'token'}
                                onChange={handleChange}
                            />
                            <Button
                                variant={'contained'}
                                color={'success'}
                                loading={isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Grid>
    );
};

export default LoginForm;
