import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import './menu-item.styles.scss';
const MenuItem =(props)=>{
    console.log(props.history);
    console.log(props.match)
    return (
    
    <div className={`${props.size } menu-item`}>
        <div className="background-image" style={{backgroundImage:`url(${props.imageUrl})`}}>
        <div className="content">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <Link to={props.linkUrl}>Shop Now</Link>
        </div>
        </div>
    </div>
)}

export default withRouter(MenuItem);