import { Palette, ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title: true;
        subtitle: true;
    }
}

export const palette: Palette = createPalette({
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
    success: {
        main: '#4b833d',
    },
    background: {
        default: '#181818',
        paper: '#212121',
    },
});

const themeOptions: ThemeOptions = {
    palette: palette,
    typography: {
        fontFamily: '"Inter","Roboto", "Helvetica", "Arial", sans-serif',
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    variants: [
                        {
                            props: { variant: 'title' },
                            style: {
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                fontSize: '2rem',
                                color: '#8E8DBE',
                            },
                        },
                        {
                            props: { variant: 'subtitle' },
                            style: {
                                textTransform: 'uppercase',
                                fontWeight: 400,
                                fontSize: '1.5rem',
                                letterSpacing: '15%',
                                color: '#878787',
                            },
                        },
                    ],
                },
            },
        },
    },
};

export const theme = createTheme(themeOptions);
