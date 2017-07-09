import React from 'react';
import PropTypes from 'prop-types';

class Suggestion extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { index, item, active, handleClick } = this.props;

        const className = 'suggest-item' + ( active ? ' suggest-item-active' : '' );

        return (
            <li
                key={ index }
                className={ className }
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
