import React from 'react';
import Suggestion from './Suggestion';

class SuggestionsBox extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { suggestions, visible } = this.props;

        const suggestionsList = suggestions.map((item) => (
            <Suggestion
                key={ item }
                item={ item }
            />
        ));

        return (
            <ul className={ 'suggest-list ' + ( visible ? ' suggest-list-visible' : '' ) }>
                { suggestionsList }
            </ul>
        );
    }

}

export default SuggestionsBox;
