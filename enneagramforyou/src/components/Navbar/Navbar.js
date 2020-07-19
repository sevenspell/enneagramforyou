import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Navbar() {

     // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
            fontFamily: ['BenchNine', 'sans-serif'],
            fontSize: 24,
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Enneagram For You
                </Typography>
                    <Button color="inherit" href="/">About Enneagram</Button>
                    <Button color="inherit" href="/enneagram">Enneagram Types</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;