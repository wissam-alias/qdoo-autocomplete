import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { placeholder, valueText, handleKeyDown, handleChange, handleFocus } = this.props;

        return (
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
    }

}

Input.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default Input;
