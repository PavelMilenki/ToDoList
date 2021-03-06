import React from 'react'
import {reduxForm} from "redux-form";
import {Field} from "redux-form";
import s from '../App.module.scss'


const LoginForm = ({handleSubmit}) => {
    return (
        <div className={s.formRedux}>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <Field name="email" component="input" type="text"/>
                <label>Password</label>
                <Field name="password" component="input" type="Password"/>
                <button>Login</button>
            </form>
        </div>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
export default LoginReduxForm