import { createMuiTheme } from '@material-ui/core/styles';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#ff9800',
    },
    secondary: {
      main: '#ffb300',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ffea00',
    },
    info: {
      main: '#4fc3f7',
    },
    success: {
      main: '#ab47bc',
    },
  },
};

const theme = createMuiTheme(themeOptions);

export default theme;
