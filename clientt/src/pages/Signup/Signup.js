/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import regImg from '../../image/connect2-removebg-preview.png';
import FormInput from '../FormInput/FormInput';
import './signup.css';

const Signup = () => {
    const [values, setValues] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        conPassword: '',
    });

    const inputs = [
        {
            id: 1,
            type: 'text',
            placeholder: 'Enter your name',
            name: 'fullName',
            label: 'Full Name',
            errMsg: 'This field is required!',
            required: true,
        },
        {
            id: 3,
            type: 'text',
            placeholder: 'Username',
            name: 'userName',
            label: 'Username',
            errMsg: 'Username should be 5-15 characters and should not include any special character!',
            pattern: '^[A-Za-z0-9]{5,15}$',
            required: true,
        },
        {
            id: 4,
            type: 'email',
            placeholder: 'Email',
            name: 'email',
            label: 'Email',
            errMsg: 'Please provide a valid email!',
            required: true,
        },
        {
            id: 5,
            type: 'password',
            placeholder: 'Password',
            name: 'password',
            label: 'Password',
            errMsg: 'Password should be 8-20 characters and include at last 1 letter, 1 number and 1 special character!',
            pattern: '^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
            required: true,
        },
        {
            id: 6,
            type: 'password',
            placeholder: 'Re-type Password',
            name: 'conPassword',
            label: 'Confirm Password',
            errMsg: 'Password does not match!',
            pattern: values.password,
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    };

    return (
        <div className="signup_sec">
            <div className="origin_signup container">
                <div className="main_signup">
                    <div className="reg_left">
                        <img src={regImg} alt="" />
                    </div>

                    <div className="reg_right">
                        <h4>Register Hare.</h4>

                        <form className="reg_form" onSubmit={handleSubmit}>
                            {inputs.map((details) => (
                                <FormInput
                                    key={details.id}
                                    {...details}
                                    value={values[details.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <button type="submit" className="submit_btn">
                                Sign In
                            </button>

                            <Link to="/login">
                                <p className="link">Already have an account? Log In hare..</p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;
