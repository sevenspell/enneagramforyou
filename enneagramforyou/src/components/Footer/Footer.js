import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';

function Footer() {

     // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '20vh',
        },
        main: {
            background: theme.palette.primary.main,
            top: 'auto',
            bottom: 0,
        },
        footer: {
            padding: theme.spacing(1, 70),
            marginTop: 'auto',
            fontFamily: ['BenchNine', 'sans-serif'],
            fontSize: 18,
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar position="fixed" className={classes.main} >
                <Typography className={classes.footer} variant="body2" >
                    {'Copyright © '}
                    <Link color="inherit" href="/">
                        Enneagram For You
                    </Link>
                    {' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </AppBar>
        </div>
    )
}

export default Footer;