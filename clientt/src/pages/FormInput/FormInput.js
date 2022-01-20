import React from 'react';
import './forminput.css';

const FormInput = ({ ...details }) => {
    const { type, placeholder, name, label } = details;
    return (
        <>
            <label className="formLebel" htmlFor={name}>
                {label}:
            </label>
            <input className="formInp" type={type} placeholder={placeholder} />
        </>
    );
};
export default FormInput;
