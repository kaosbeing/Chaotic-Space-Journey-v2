import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    TextField,
    Tooltip,
} from '@mui/material';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface AgentRegisterUiProps {
    dialogOpen: boolean;
    handleDialogClose: () => void;
    agentToken: string;
}

function AgentRegisterUi({
    dialogOpen,
    handleDialogClose,
    agentToken,
}: AgentRegisterUiProps) {
    const [hasUserCopiedToken, setHasUserCopiedToken] =
        useState<boolean>(false);

    const onDialogClose = () => {
        if (hasUserCopiedToken) {
            handleDialogClose();
        }
    };

    return (
        <Dialog open={dialogOpen} onClose={onDialogClose}>
            <DialogTitle color={'secondary'}>
                Agent successfully registered !
            </DialogTitle>
            <DialogContent>
                <Grid container gap={2}>
                    <DialogContentText color={'white'}>
                        You will be automatically logged in to Chaotic Space
                        Journey. But in order to log back in, or log in into any
                        other client, you need to keep this token safe with you,
                        it's your password !
                    </DialogContentText>
                    <Grid
                        container
                        direction={'row'}
                        gap={2}
                        alignItems={'center'}
                        wrap={'nowrap'}
                        flexGrow={'grow'}
                        width={'100%'}
                    >
                        <TextField
                            fullWidth
                            slotProps={{ htmlInput: { readOnly: true } }}
                            value={agentToken}
                        />
                        <Grid>
                            <Tooltip
                                title={'Copier le token'}
                                placement={'top'}
                                arrow
                            >
                                <IconButton
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            agentToken,
                                        );
                                        setHasUserCopiedToken(true);
                                    }}
                                >
                                    <ContentCopyIcon
                                        color={
                                            hasUserCopiedToken
                                                ? 'success'
                                                : 'inherit'
                                        }
                                    />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default AgentRegisterUi;
