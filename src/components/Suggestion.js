import React from 'react';
import PropTypes from 'prop-types';

class Suggestion extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { item, handleClick } = this.props;

        return (
            <li
                key={ item }
                className="suggest-item"
                onClick={ () => handleClick(item) }
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
