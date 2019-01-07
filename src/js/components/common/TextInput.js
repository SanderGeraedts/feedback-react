import React from 'react';

import '../../../css/components/common/TextInput.css';

const TextInput = ({id, onChanged, label, type="text"}) => {
    return (
        <div className="form-group inline">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={onChanged}/>
        </div>
    )
};

export default TextInput;