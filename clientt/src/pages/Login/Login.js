/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import './Login.css';

const Login = () => {
    const [valus, setValus] = useState({
        email: '',
        password: '',
    });

    const inputDetails = [
        {
            id: 1,
            type: 'email',
            name: 'Email',
            label: 'Email',
            errMsg: 'Please provide a valid email address!',
            required: true,
        },
        {
            id: 2,
            type: 'password',
            name: 'Password',
            label: 'Password',
            required: true,
        },
    ];

    const handleChange = (e) => {
        setValus({ ...valus, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(valus);
    };

    return (
        <div className="login_sec">
            <div className="main_login">
                <h2 className="login_header">Choose a login method</h2>

                <div className="main_sec">
                    <div className="left_side">
                        <button className="social_btn google" type="button">
                            <FaGoogle /> Google
                        </button>
                        <button className="social_btn facebook" type="button">
                            <FaFacebook /> Facebook
                        </button>
                        <button className="social_btn github" type="button">
                            <FaGithub /> Github
                        </button>
                    </div>
                    <div className="h_line">
                        <p>or</p>
                    </div>
                    <div className="v_line">
                        <p>or</p>
                    </div>
                    <form className="login_form" onSubmit={handleSubmit}>
                        {inputDetails.map((details) => (
                            <FormInput
                                key={details.id}
                                {...details}
                                valus={valus}
                                onChange={handleChange}
                            />
                        ))}

                        <button className="submit_btn" type="submit">
                            Log In
                        </button>
                        <Link to="/register" className="go_sign">
                            Don&apos;t not have an account? Sign Up hare..
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
