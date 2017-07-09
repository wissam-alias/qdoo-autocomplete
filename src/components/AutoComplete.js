import React from 'react';

import Input from './Input';
import SuggestionsBox from './SuggestionsBox';

class AutoComplete extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="field">
                <Input />
                <SuggestionsBox />
            </div>
        );
    }

}

export default AutoComplete;
