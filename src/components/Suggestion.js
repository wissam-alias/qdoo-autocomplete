import React from 'react';

const Suggestion = ({ index, item, active, handleClick }) => {

    const className = 'suggest-item' + ( active ? ' suggest-item-active' : '' );

    return (
        <li
            key={ index }
            className={ className }
            onClick={ () => handleClick(index, item) }
        >
            { item }
        </li>
    )
};

export default Suggestion;
