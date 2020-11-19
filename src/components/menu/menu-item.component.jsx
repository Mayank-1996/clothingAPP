import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title,id,imageUrl,size}) => (
    

    <div id={id} className="menu-item" >
        <div style={{backgroundImage:`url(${imageUrl})`}} className={`background-image ${size}`}></div>
    
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;