// import "./index.css";
import React, { useState, useContext, useEffect } from 'react';
import Header from "../../components/Header/Header"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function Enneagram() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header h1="Enneagram Types" />

        </div>
    )
}

export default Enneagram;