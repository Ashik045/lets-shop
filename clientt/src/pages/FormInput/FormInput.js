/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './forminput.css';

const FormInput = (props) => {
    const [focus, setFocus] = useState(false);
    const { label, errMsg, onChange, ...others } = props;

    const handleFocus = () => {
        setFocus(true);
    };

    return (
        <>
            <label className="formLebel">{label}:</label>
            <input
                className="formInp"
                onChange={onChange}
                {...others}
                onBlur={handleFocus}
                onFocus={() => others.name === 'conPassword' && setFocus(true)}
                focus={focus.toString()}
            />
            <p className="err_msg">{errMsg}</p>
        </>
    );
};

export default FormInput;
