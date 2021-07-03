import React from 'react';
import Navbar from '../../layout/Navbar';
import { RegisterContainer, RegisterBackground, RegisterForm } from './SignupStyles';
import * as Yup from 'yup';
import { Field, Formik, ErrorMessage } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { AuthService } from '../../../services/authService';
import { useAlert } from 'react-alert';

function Signup() {
    const alert = useAlert();
    const history = useHistory();
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        name: Yup.string().required('Required'),
        denomination: Yup.string().required('Required'),
        password: Yup.string()
            .min(6, 'Minimum 8 characters')
            .max(25, 'Maximum 25 characters')
            .required('Required')
    });
    return (
        <RegisterContainer>
            <Navbar />
            <RegisterBackground>
                <Formik
                    initialValues={{name: '', email: '', denomination: '', password: ''}}
                    onSubmit={values => {
                        const formData = {
                            name: values.name,
                            email: values.email,
                            denomination: values.denomination,
                            password: values.password,
                        }
                        AuthService.onSignup(formData)
                            .then((success) => {
                                console.log('Successfully Signed Up!!', success);
                                history.push('/');
                                alert.success('Well done you are now registered!')
                            })
                            .catch(err => {
                                console.log(err)
                                alert.error('Sorry, something went wrong pal!!')
                            })
                    }}
                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <RegisterForm onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <Field type="text" className={"input-field" + (errors.name && touched.name ? ' is-valid' : '')} value={values.name} onChange={handleChange} name="name" placeholder="Enter Your Name Here" />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            <Field type="text" className={"input-field" + (errors.email && touched.email ? ' is-invalid' : '')}  value={values.email} name="email" onChange={handleChange} placeholder="Enter Your Email Here..." /><br />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            <Field type="text" className={"input-field" + (errors.denomination && touched.denomination ? ' is_invalid' : '')} value={values.denomination} onChange={handleChange} name="denomination" placeholder="Enter Your Denomination Here" />
                            <ErrorMessage name="denomination" component="div" className="invalid-feedback" />
                            <Field type="password" className={"input-field" + (errors.password && touched.password ? ' is_invalid' : '')}  value={values.password} name="password" onChange={handleChange} placeholder="Enter Your Password Here..." /><br />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            <input type="submit" className="register-btn" value="Sign Up" />
                            <h3>Already have an account?{' '}<Link to="/">Go Back!</Link></h3>
                        </RegisterForm>
                    )}
                </Formik>
            </RegisterBackground>
        </RegisterContainer>
    );
}

export default Signup;
