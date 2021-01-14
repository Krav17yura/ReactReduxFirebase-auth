import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {LoginForm} from "../../forms/LoginForm";
import {login} from "../../redux/ducks/auth/actionCreator";

import {LockOutlined} from '@material-ui/icons';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";


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

export const LoginPage = (props) => {
    const dispatch = useDispatch();
    const {loginInProgress, loginError} = useSelector(state => state.reAuth);

    const classes = useStyles();

    const handleSubmit = values => {
        const {email, password} = values;
        const {history} = props;
        dispatch(login(email, password))
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
                    Sign in
                </Typography>
                <LoginForm
                    onSubmit={handleSubmit}
                    inProgress={loginInProgress}
                    onError={loginError}
                />
            </div>
        </Container>
    );
};

