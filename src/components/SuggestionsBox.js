import React from 'react';
import Suggestion from './Suggestion';

class SuggestionsBox extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { suggestions, visible, handleClick } = this.props;

        const className = 'suggest-list ' + ( visible ? ' suggest-list-visible' : '' );

        const suggestionsList = suggestions.map((item) => (
            <Suggestion
                key={ item }
                item={ item }
                handleClick={ handleClick }
            />
        ));

        return (
            <ul className={ className }>
                { suggestionsList }
            </ul>
        );
    }

}

export default SuggestionsBox;
