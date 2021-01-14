import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";


 const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(3)
    },
}));

export const NotFoundPage = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper}>
                Not found. <Link to='/login'>Sign in</Link>
            </Paper>
        </Container>
    );
};

