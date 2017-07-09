import React from 'react';
import PropTypes from 'prop-types';

class Suggestion extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { index, item, handleClick } = this.props;

        return (
            <li
                key={ index }
                className="suggest-item"
                onClick={ () => handleClick(index, item) }
            >
                { item }
            </li>
        );
    }

}

Suggestion.propTypes = {
    handleClick: PropTypes.func.isRequired
};

export default Suggestion;
