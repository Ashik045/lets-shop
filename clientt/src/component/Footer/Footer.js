import React from 'react';
import './footer.css';

const Footer = ({ footerItem, footerTitle }) => (
    <div className="footer">
        {footerTitle && <p>{footerTitle}</p>}
        <div className="footer_item">
            {footerItem.map((item) => (
                <a key={item.id} href="#s" className="item">
                    {item.title}
                </a>
            ))}
        </div>
    </div>
);

export default Footer;
