import React from 'react';
import Suggestion from './Suggestion';

const SuggestionsBox = ({ suggestions, visible, handleClick }) => {
    const className = 'suggest-list ' + ( visible ? ' suggest-list-visible' : '' );

    const suggestionsList = [];
    // @Todo: Review this later - Prefer for-loop to make use of indices
    for (let i = 0; i < suggestions.length; i++) {
        suggestionsList.push(
            <Suggestion
                key={ i }
                index={ i }
                item={ suggestions[i].value }
                active={ suggestions[i].active }
                handleClick={ handleClick }
            />
        );
    }

    return (
        <ul className={ className }>
            { suggestionsList }
        </ul>
    );
};

export default SuggestionsBox;
