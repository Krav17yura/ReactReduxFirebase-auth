import React from 'react';
import {Link} from 'react-router-dom';
import {Form} from 'react-final-form';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import {FieldTextInput} from "../../components/FieldTextInput";

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

export const SignupForm = props => {
    const classes = useStyles();

    return (
        <Form{...props} render={formProps => {
                const {handleSubmit, inProgress, onError} = formProps;

                const errorMessage = onError
                    ? onError.code === 'auth/email-already-in-use'
                        ? 'User already exist'
                        : 'Something went wrong. Try again'
                    : null;

                return (
                    <form className={classes.form} onSubmit={handleSubmit}>
                        {errorMessage ?
                            <Typography color="error" className={classes.error}>{errorMessage}</Typography> : null}
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <FieldTextInput
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FieldTextInput
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FieldTextInput
                                    variant="outlined"
                                    required
                                    type="email"
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
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
                            startIcon={inProgress ?
                                <CircularProgress size={20} className={classes.buttonProgress}/> : null}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" className={classes.link}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                );
            }}
        />
    );
}

