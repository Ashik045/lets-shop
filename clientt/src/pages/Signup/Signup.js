/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
        },
        {
            id: 3,
            type: 'text',
            placeholder: 'Username',
            name: 'userName',
            label: 'Username',
        },
        {
            id: 4,
            type: 'email',
            placeholder: 'Email',
            name: 'email',
            label: 'Email',
        },
        {
            id: 5,
            type: 'password',
            placeholder: 'Password',
            name: 'password',
            label: 'Password',
        },
        {
            id: 6,
            type: 'password',
            placeholder: 'Re-type Password',
            name: 'conPassword',
            label: 'Confirm Password',
        },
    ];

    return (
        <div className="signup_sec">
            <div className="origin_signup container">
                <div className="main_signup">
                    <div className="reg_left">
                        <img src={regImg} alt="" />
                    </div>

                    <div className="reg_right">
                        <h4>Register Hare.</h4>

                        <form className="reg_form">
                            {inputs.map((details) => (
                                <FormInput
                                    key={details.id}
                                    {...details}
                                    value={values[details.name]}
                                />
                            ))}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Signup;
