import React from 'react';
import Navbar from '../../layout/Navbar';
import { LoginContainer, LoginBackground, LoginForm } from './SigninStyles';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, ErrorMessage, Field } from 'formik';
import { AuthService } from "../../../services/authService";
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

function Signin() {
    const history = useHistory();
    const alert = useAlert();
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string()
            .min(6, 'Minimum 8 characters')
            .max(25, 'Maximum 25 characters')
            .required('Required')
    })
    return (
        <LoginContainer>
            <Navbar />
            <LoginBackground>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={values => {
                        AuthService.onSignin(values.email, values.password)
                        .then((success) => {
                            console.log('Successfully logged in!!', success);
                            alert.success(`Welcome back ${success?.data?.user?.name}`)
                            history.push('/journal');
                        })
                        .catch(error => {
                            console.log(error)
                            alert.error('Couldnt sign you in, please try again!')
                        });
                    }}
                >
                    {({ handleSubmit, handleChange, values, errors, touched }) => (
                        <LoginForm onSubmit={handleSubmit}>
                            <h2>Sign In</h2>
                            <Field type="text" className={"input-field" + (errors.email && touched.email ? ' is-invalid' : '')}  value={values.email} name="email" onChange={handleChange} placeholder="Enter Your Email Here..." /><br />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            <Field type="password" className={"input-field" + (errors.password && touched.password ? ' is_invalid' : '')}  value={values.password} name="password" onChange={handleChange} placeholder="Enter Your Password Here..." /><br />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            <input type="submit" className="signin-btn"  value="Sign In"/>
                            <h3>You need an account?{' '}<Link to="/signup">Sign Up here!</Link></h3>
                            <h3>Forgot your Password?{' '}<Link to="">Click here!</Link></h3>
                        </LoginForm>
                    )}
                </Formik>
            </LoginBackground>
        </LoginContainer>
    );
}

export default Signin;
