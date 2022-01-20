import React from 'react';
import SearchSong from "./SearchSong";
import Playlist from "./Playlist";
import {Button, Container, Grid} from "@mui/material";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    myButton: {
        backgroundColor: 'orange'
    }
})

const Main = () => {
    const classes = useStyles();

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Playlist/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <SearchSong/>
                    <Button variant="dashed">Przycisk</Button>
                    <Button variant="outlined">Przycisk</Button>
                    <Button variant="contained">Przycisk</Button>
                    <Button>Przycisk</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Main;


