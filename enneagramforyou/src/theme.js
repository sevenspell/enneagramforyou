import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import indigo from '@material-ui/core/colors/indigo';
import amber from '@material-ui/core/colors/amber';
import lime from '@material-ui/core/colors/lime';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
            light: purple[200],
            dark: purple[600]
        },
        secondary: {
            main: amber[600],
            light: lime[400],
            dark: amber[900]
        }
    }
});

export default theme;