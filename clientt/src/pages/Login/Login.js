/* eslint-disable react/jsx-props-no-spreading */
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/context';
import FormInput from '../FormInput/FormInput';
import './Login.css';


const Login = () => {
    const [valus, setValus] = useState({
        email: '',
        password: '',
    });
    const [authErr, setAuthErr] = useState(false);

    const { dispatch, isFetching } = useContext(Context)
    
    const inputDetails = [
        {
            id: 1,
            type: 'email',
            name: 'email',
            label: 'Email',
            errMsg: 'Please provide a valid email address!',
            required: true,
        },
        {
            id: 2,
            type: 'password',
            name: 'password',
            label: 'Password',
            required: true,
        },
    ];

    const handleChange = (e) => {
        setValus({ ...valus, [e.target.name]: e.target.value });
    };

   
    const nevigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = valus;

        try {
           const user = await axios.post('http://localhost:4000/api/auth/login', {
                email,
                password
            })
            
            dispatch({type: 'LOGIN_SUCCESS', payload: user.data.message})
            console.log(user.data);
            nevigate('/')
        } catch (error) {
            setAuthErr(true)
            console.log(error);
            dispatch({type: 'LOGIN_FAILURE'})
        }

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

                        {authErr && <p className="mt-1" style={{color: 'red', marginBottom: '-12px'}}>Authentication failed!</p>}

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
