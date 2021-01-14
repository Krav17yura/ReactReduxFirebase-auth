import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from 'react-final-form';
import {FieldTextInput} from "../../components/FieldTextInput";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";


const printErrorMessage = error => {
    switch (error.code) {
        case 'auth/wrong-password':
            return 'Wrong credentials';
        case 'auth/user-not-found':
            return 'User does not exist';
        case 'auth/too-many-requests':
            return 'User blocked. Restore password or try again later';
        default:
            return 'Something went wrong. Try again';
    }
};

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    error: {
        marginBottom: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonProgress: {
        color: 'white',
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',

        '&:hover': {
            textDecoration: 'underline'
        }
    }
}));

export const LoginForm = props => {
    const classes = useStyles();

    return (
        <Form{...props} render={formProps => {
            const {handleSubmit, inProgress, onError} = formProps;
            const errorMessage = onError ? printErrorMessage(onError) : null;
            return (
                <form className={classes.form} onSubmit={handleSubmit}>
                    {errorMessage ?
                        <Typography color="error" className={classes.error}>{errorMessage}</Typography> : null}
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FieldTextInput
                                variant="outlined"
                                required
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FieldTextInput
                                variant="outlined"
                                required
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        startIcon={inProgress ? <CircularProgress size={20} className={classes.buttonProgress}/> : null}
                    >
                        Sign In
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/signup" className={classes.link}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            );
        }}
        />
    );
}
