import React from 'react';

class Input extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { placeholder, valueText, handleChange, handleFocus } = this.props;
        return (
            <input
                type="text"
                placeholder={ placeholder }
                value={ valueText }
                className="field-input"
                onChange={ handleChange }
                onMouseDown={ handleFocus }
            />
        );
    }

}

export default Input;
