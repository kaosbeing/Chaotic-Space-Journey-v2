import {
    Button,
    FormControl,
    IconButton,
    InputLabel,
    Link,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { Faction } from '../../../service/dto/faction.dto';
import { Form, Formik, FormikHelpers } from 'formik';
import { register } from '../../../service/spacetraders/agent.api';
import { Register } from '../../../service/dto/register.dto';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AgentRegisterUi from './agent-register.ui';
import { useAuth } from '../../../service/auth.context.provider';

interface RegisterFormProps {
    factionList: Faction[];
}

const RegisterForm = ({ factionList }: RegisterFormProps) => {
    const [faction, setFaction] = useState<string>('');
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [agentToken, setAgentToken] = useState<string>('');

    const { login } = useAuth();

    const handleSelectChange = (e: SelectChangeEvent) => {
        setFaction(e.target.value as string);
    };

    const handleSubmit = async (
        data: Register,
        helpers: FormikHelpers<Register>
    ) => {
        helpers.setSubmitting(true);
        const res = await register(data).then((res) => res);
        helpers.setSubmitting(false);

        setAgentToken(res.token);
        setDialogOpen(true);
        await login(res.token);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const initialValues: Register = {
        bearer: '',
        email: '',
        symbol: '',
        faction: ''
    };

    return (
        <>
            <Grid container direction={'column'} alignItems={'center'} gap={2}>
                <Grid>
                    <Typography color={'primary'} fontWeight={'bold'}>
                        Register a new agent
                    </Typography>
                </Grid>

                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ isSubmitting, handleSubmit, handleChange }) => (
                        <Form onSubmit={handleSubmit}>
                            <Grid
                                container
                                spacing={2}
                                direction={'column'}
                                gap={2}
                            >
                                <Tooltip
                                    title={
                                        'To register an agent, you must provide a SpaceTraders account token in order to link your agent to your account.'
                                    }
                                    placement={'top'}
                                    arrow
                                >
                                    <Grid
                                        container
                                        gap={2}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                    >
                                        <TextField
                                            name={'bearer'}
                                            label={'Account Token'}
                                            onChange={handleChange}
                                        />
                                        <Grid height={'min-content'}>
                                            <Link
                                                href={
                                                    'https://my.spacetraders.io/'
                                                }
                                                target={'_blank'}
                                            >
                                                <IconButton>
                                                    <OpenInNewIcon
                                                        color={'primary'}
                                                    />
                                                </IconButton>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Tooltip>
                                <TextField
                                    name={'email'}
                                    label={'Email'}
                                    onChange={handleChange}
                                />
                                <TextField
                                    name={'symbol'}
                                    required
                                    label={'Agent Symbol'}
                                    onChange={handleChange}
                                />
                                <FormControl required>
                                    <InputLabel>Faction</InputLabel>
                                    <Select
                                        name={'faction'}
                                        variant={'outlined'}
                                        label={'Faction'}
                                        value={faction}
                                        onChange={(e) => {
                                            handleChange(e);
                                            handleSelectChange(e);
                                        }}
                                    >
                                        {factionList.map((faction) => (
                                            <MenuItem
                                                key={faction.symbol}
                                                value={faction.symbol}
                                            >
                                                {faction.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Button
                                    disabled={isSubmitting}
                                    loading={isSubmitting}
                                    variant={'contained'}
                                    color={'success'}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </Grid>
            <AgentRegisterUi
                dialogOpen={dialogOpen}
                agentToken={agentToken}
                handleDialogClose={handleDialogClose}
            />
        </>
    );
};

export default RegisterForm;
