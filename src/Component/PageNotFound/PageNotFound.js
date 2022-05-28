import React from 'react';
import './PageNotFound.css';
import notfound from '../image/notfound.png';
const PageNotFound = () => {
    return (
        <div className="not_found">
            <img src={notfound} alt="" />
        </div>
    );
};

export default PageNotFound;