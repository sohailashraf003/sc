import React from 'react';

function Input({
    label,
    id,
    tip,
    type,
    error,
    ...otherProps

}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label} {otherProps.required? <span className="text-danger">*</span>: null}</label>
            <input type={type} className="form-control" id={id}  placeholder={label}  {...otherProps}/>
            {error?<span className="text-danger">{error}</span> : null}
            {tip?<small  className="form-text text-muted">{tip}</small>: null}
        </div>
    );
}

function Select({
    label,
    id,
    tip,
    options,
    error,
    ...otherProps

}) {
    return (
        
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <select className="form-control" id={id}  {...otherProps}>
                {options.map( option => <option key={option.value} value={option.value}>{option.displayName}</option>)}
            </select>
            {error?<span className="text-danger">{error}</span> : null}
            {tip?<small  className="form-text text-muted">{tip}</small>: null}
        </div>
    );
}

export default  Input;
export {
    Select
}
