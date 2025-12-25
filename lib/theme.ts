'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true;
  }
}
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    flat: true;
  }
}

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
        },
        tertiary: {
          main: '#636133'
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#FFB68C'
        },
        secondary: {
          main: '#E5BFAA'
        },
        tertiary: {
          main: '#CDC991'
        },
      },
    },
  },
  // shape: {
  //   borderRadius: 10,
  // },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
      defaultProps: {
        variant: 'flat',
        elevation: 2,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'filled' },
              style: {
                backgroundColor: 'var(--surface-container)',
                '&:hover': {
                  backgroundColor: 'var(--surface-container-high)',
                },
              },
            },
          ],
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          variants: [
            {
              props: { color: 'default' },
              style: {
                backgroundColor: 'var(--surface)',
                boxShadow: 'none'
              }
            }
          ]
        },
      },
      defaultProps: {
        position: 'fixed',
        color: 'default',
        elevation: 1,
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: 'var(--surface)',
          defaultProps: {
            elevation: 1,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          variants: [
            {
              props: { variant: 'flat', elevation: 0 },
              style: {
                backgroundColor: 'var(--surface-container-lowest)',
                boxShadow: 'none',
              },
            },
            {
              props: { variant: 'flat', elevation: 1 },
              style: {
                backgroundColor: 'var(--surface)',
                boxShadow: 'none',
              },
            },
            {
              props: { variant: 'flat', elevation: 2 },
              style: {
                backgroundColor: 'var(--surface-container-low)',
                boxShadow: 'none',
              },
            },
            {
              props: { variant: 'flat', elevation: 3 },
              style: {
                backgroundColor: 'var(--surface-container)',
                boxShadow: 'none',
              },
            },
            {
              props: { variant: 'flat', elevation: 4 },
              style: {
                backgroundColor: 'var(--surface-container-high)',
                boxShadow: 'none',
              },
            },
            {
              props: { variant: 'flat', elevation: 5 },
              style: {
                backgroundColor: 'var(--surface-container-highest)',
                boxShadow: 'none',
              },
            },
          ],
        },
      },
      defaultProps: {
        variant: 'flat',
        elevation: 1
      },
    },
  }
});

export default theme;
