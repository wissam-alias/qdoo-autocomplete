import React from 'react';

class SuggestionsBox extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <ul className="suggest-list suggest-list-visible">
                <li className="suggest-item">Suggestion 01</li>
                <li className="suggest-item selected">Suggestion 02</li>
                <li className="suggest-item">Suggestion 03</li>
            </ul>
        );
    }

}

export default SuggestionsBox;
