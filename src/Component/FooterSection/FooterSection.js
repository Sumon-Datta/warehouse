import React from 'react';
import './FooterSection.css'
const FooterSection = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
        <span>Copyright © {year}. All right reserved CarHouse.com.bd</span>
       </div>
    );
};

export default FooterSection;