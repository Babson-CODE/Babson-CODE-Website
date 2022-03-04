import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1b5e20',
        light: '#4c8c4a',
        dark: '#003300',
        contrastText: '#fff'
      },
      secondary: {
        main: '#83dae7',
        light: '#60ad5e',
        dark: '#005005',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: ['Verdana'],
    },
  });

