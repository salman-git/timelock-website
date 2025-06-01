// Minimalist theme with soft gradients and neon accents for AI-enhanced look
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E88E5', // Neon cyan
    },
    secondary: {
      main: '#ab3df5', // Neon pink
    },
    background: {
      default: '#f7fafd',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 32px 0 rgba(0,230,230,0.08)',
        },
      },
    },
  },
});

export default theme;
