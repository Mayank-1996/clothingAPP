import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title,key,imageUrl,size,linkUrl,history,match}) => (
    

    <div key={key} className="menu-item" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div style={{backgroundImage:`url(${imageUrl})`}} className={`background-image ${size}`}></div>
    
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);