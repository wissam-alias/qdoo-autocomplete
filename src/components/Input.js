import React from 'react';

const Input = ({ placeholder, valueText, handleKeyDown, handleChange, handleFocus }) => (
    <input
        type="text"
        placeholder={ placeholder }
        value={ valueText }
        className="field-input"
        onKeyDown={ handleKeyDown }
        onChange={ handleChange }
        onMouseDown={ handleFocus }
    />
);

export default Input;
