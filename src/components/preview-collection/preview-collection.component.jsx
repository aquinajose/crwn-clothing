import React from 'react';
// import {withRouter,Link} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const PreviewCollection =({title,id,items,match})=>{
    console.log(match)
    return(
    <div className="collection-preview"> 
       <h1 className="title">{title.toUpperCase()}</h1>
       {/* <Link to="`${match.path}/:${title}`">{title.toUpperCase()}</Link>  */}
       <div className="preview">
           {items.filter((item,idx)=>idx<4).map((item)=>{
               return(
                   <CollectionItem key={item.id} item={item} />
               )
           })}
       </div> 
    </div>
)}

export default PreviewCollection;