import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F9C938',
    },
    secondary: {
      main: '#E3A127',
    },
    error: {
      main: '#B00020',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        background: '#FFFFFF',
        margin: '2rem',
        maxWidth: '90rem',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        background: '#F9C938',
      },
    },
    MuiTable: {
      root: {
        margin: '1rem',
        padding: '0rem 2rem',
      },
    },
    MuiTableCell: {
      root: {
        padding: '10px',
      },
    },
  },
});
