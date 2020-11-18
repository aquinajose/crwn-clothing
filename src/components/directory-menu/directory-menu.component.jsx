import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';

import './directory-menu.styles.scss';
// class DirectoryMenu extends React.Component {
//     constructor() {
//         super();
//     }

//     render() {
//         return (
//             <div className="directory-menu">
//                 {
//                     this.state.sections.map(({id,...otherSectionProps}) => {
//                         return <MenuItem key={id} {...otherSectionProps}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }
const DirectoryMenu =({sections})=>{
    return(
    <div className="directory-menu">
        {
            sections.map(({id,...otherSectionProps}) => {
                return <MenuItem key={id} {...otherSectionProps}/>
        })
        }
    </div>
)}

const mapStateToProps =(state)=>({
    sections:state.directory.sections
})
export default connect(mapStateToProps)(DirectoryMenu);