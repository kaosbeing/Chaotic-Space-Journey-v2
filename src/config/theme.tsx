import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#8E8DBE',
        },
        secondary: {
            main: '#B6B5D1',
        },
        text: {
            secondary: '#878787',
        },
        background: {
            default: '#181818',
            paper: '#212121',
        },
    },
    typography: {
        fontFamily: '"Inter","Roboto", "Helvetica", "Arial", sans-serif',
    },
};

export default themeOptions;
