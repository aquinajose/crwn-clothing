import React from 'react';
import './customFormInput.styles.scss';

const CustomFormInput =({handleChange,label,...otherProps})=>{
    return (
    <div className="group">
    <input className="form-input" onChange={handleChange} id={label} {...otherProps} />
    {
        label?
        (<label className={`${otherProps.value.length?'shrink':''} form-input-label`} htmlFor={label}>{label.toUpperCase()}</label>)
        :null
    }
    </div>
)}

export default CustomFormInput;