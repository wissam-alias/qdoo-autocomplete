import React from 'react';

class Input extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { placeholder, handleChange, handleFocus, handleBlur } = this.props;
        return (
            <input
                type="text"
                placeholder={ placeholder }
                className="field-input"
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
            />
        );
    }

}

export default Input;
