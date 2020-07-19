import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[400],
            light: purple[200],
            dark: purple[900]
        },
        secondary: {
            main: indigo[500],
            light: indigo[400],
            dark: indigo[800]
        }
    }
});

export default theme;