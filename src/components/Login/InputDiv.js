import React from 'react';
import classes from './Login.module.css';

const InputDiv = (props) => 
{
    return(
    <React.Fragment>
    
        <div
        className={`${classes.control} ${
            props.passwordState.isValid === false ? classes.invalid : ''
        }`}
        >
        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            value={props.passwordState.value}
            onChange={props.passwordChangeHandler}
            onBlur={props.validatePasswordHandler}
        /> 
    </div>
    </React.Fragment>
    );
};
export default InputDiv;