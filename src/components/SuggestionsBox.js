import React from 'react';
import Suggestion from './Suggestion';

class SuggestionsBox extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { suggestions, visible, handleClick } = this.props;

        const className = 'suggest-list ' + ( visible ? ' suggest-list-visible' : '' );

        const suggestionsList = [];
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
    }

}

export default SuggestionsBox;
