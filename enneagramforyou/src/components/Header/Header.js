import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function Header(props) {


    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        main: {
            background: theme.palette.secondary.light,
            color: theme.palette.primary.main,
            top: 'auto',
            bottom: 0,
        },
        header: {
            flexGrow: 1,
            fontFamily: ['BenchNine', 'sans-serif'],
            fontSize: 20,
            textAlign: 'center',

        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.main}>
                <Typography variant="h6" className={classes.header}>
                    <h1>{props.h1}</h1>
                </Typography>
            </AppBar>
        </div>
    );
}

export default Header;