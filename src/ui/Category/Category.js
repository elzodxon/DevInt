// CardComponent.js

import React from 'react';
import './Category.css'
const Category = ({ title, subtitle, link }) => {
    return (
        <a href={link} className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-subtitle">{subtitle}</p>
        </a>
    );
};

export default Category;
