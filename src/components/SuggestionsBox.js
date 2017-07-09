import React from 'react';

class SuggestionsBox extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { suggestions, visible } = this.props;

        const suggestionsList = suggestions.map((item) => (
            <li key={ item } className="suggest-item">{ item }</li>
        ));

        return (
            <ul className={ 'suggest-list ' + ( visible ? ' suggest-list-visible' : '' ) }>
                { suggestionsList }
            </ul>
        );
    }

}

export default SuggestionsBox;
