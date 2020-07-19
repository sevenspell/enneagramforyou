// import "./index.css";
import React, { useState, useContext, useEffect } from 'react';
import Header from "../../components/Header/Header"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Enneagram() {

    // create custom css styling using makeStyles
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        gridContainer: {
            padding: theme.spacing(2),
            marginTop: theme.spacing(4),
        },
        media: {
            padding: theme.spacing(4),
            height: 800,
        },
        title: {
            flexGrow: 1,
            fontFamily: ['BenchNine', 'sans-serif'],
            fontSize: 24,
            textAlign: 'right'
        }
    }));


    const classes = useStyles();

    return (
        <div className={classes.root} component="img">
            <Header h1="Enneagram Types" />
            <Grid container >
                <Grid item xs={2} />
                <Grid item xs={8}>
                    <Card className={classes.gridContainer}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={require('../../utils/eimageps.png')}
                                title="Enneagram Types"
                                component="img"
                                alt="Enneagram Types"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                    Enneagram For You
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </div>
    )
}

export default Enneagram;