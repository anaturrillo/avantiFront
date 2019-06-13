import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const defaultThemeSettings = {
  primary: {
    light: '#FFF8E1',
    main: '#FFECB3',
    dark: '#EED27C',
    contrastText: '#f4bf7a',
  },
  secondary: {
    light: '#B3E5FC',
    main: '#29B6F6',
    dark: '#0288D1',
    contrastText: '#78909C',
  },
  tonalOffset: 0.2,
};

export const theme = createMuiTheme({
  palette: defaultThemeSettings
});

export const createTheme = (theme) => createMuiTheme({palette : theme || defaultThemeSettings});
