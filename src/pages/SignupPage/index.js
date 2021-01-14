import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {LockOutlined} from '@material-ui/icons';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {SignupForm} from "../../forms/SignupForm";
import {signup} from "../../redux/ducks/auth/actionCreator";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const SignupPage = props => {
    const dispatch = useDispatch();
    const {signupInProgress, signupError} = useSelector(state => state.reAuth);
    const classes = useStyles();

    const handleSubmit = values => {
        const {history} = props;
        dispatch(signup(values))
            .then(() => history.push('/profile'))
            .catch((e) => console.log(e))
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <SignupForm
                    onSubmit={handleSubmit}
                    inProgress={signupInProgress}
                    onError={signupError}
                />
            </div>
        </Container>
    )
};
