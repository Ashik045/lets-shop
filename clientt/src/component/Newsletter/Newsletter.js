import React from 'react';
import { BiSend } from 'react-icons/bi';
import './newsletter.css';

const Newsletter = () => (
    <div className="newslatte_sec" id="contact">
        <h2>Newsletter</h2>

        <h6>Stay connect with us and get timely update from us.</h6>
        <div className="inp_div">
            <input type="email" placeholder="Enter your email." />
            <BiSend size={37} className="iconn" />
        </div>
    </div>
);

export default Newsletter;
