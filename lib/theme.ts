'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#8D4F28',
        },
        secondary: {
          main: '#765948'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#FFB68C'
        },
        secondary: {
          main: '#E5BFAA'
        }
      }
    }
  }
});

export default theme;
