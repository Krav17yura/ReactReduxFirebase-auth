import React from 'react';
import { Field } from 'react-final-form';
import {
    TextField,
} from '@material-ui/core';

const FieldTextInputComponent = (props)  => {
    const {input, ...rest} = props;

    return (
        <TextField fullWidth{...input}{...rest}/>
    );
}

export const FieldTextInput = (props) => {
    return <Field component={FieldTextInputComponent} {...props} />
}

