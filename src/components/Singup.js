import React from 'react'
import { Formik, Form} from 'formik'
import {TextField} from './textField';
import * as Yup from 'yup';
export const Singup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lasttName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .email(15, 'Email is invalid')
        .required('Email is Required'),
        password: Yup.string()
        .min(6, 'Must be 6 characters or More')
        .required('Password is Required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('confirm password')
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={(values => {
                console.log(values)
            })}
            >
            {formik => (
                <div>
                    <h2 className="my-4 font-weight-bold-display-4">Sign Up</h2>
                    
                    <Form>
                          <TextField label="First Name" name="firstName" type="text"/>
                          <TextField label="last Name" name="lastName" type="text"/>
                          <TextField label="Email" name="email" type="email"/>
                          <TextField label="password" name="password" type="password"/>
                          <TextField label="Confirm Password" name="confirmPassword" type="password"/>
                          <button className="btn btn-dark mt-3" type="submit">Launch</button>
                          <button className="btn btn-danger mt-3 ml-10" type="reset">Abort</button>
                        </Form>
                </div>
                )}
        </Formik>
    )
}
