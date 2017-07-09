import React from 'react';

import Input from './Input';
import SuggestionsBox from './SuggestionsBox';

class AutoComplete extends React.Component {

    constructor() {
        super();

        this.state = {
            focused: false,
            suggestions: []
        };
    }

    _handleChange(ev) {
        console.log('_handleChange');
        this.search(ev.target.value);
    }

    _handleFocus(ev) {
        console.log('_handleFocus');
        this.setState({
            focused: true
        });
    }

    _handleBlur(ev) {
        console.log('_handleBlur');
        this.setState({
            focused: false
        });
    }

    search(input) {
        const wordBank = ['item1', 'item2', 'item3'];

        this.setState({
            suggestions: input
                ? wordBank.filter((word) => {
                    return word.indexOf(input) > -1;
                })
                : []
        });
    }

    render() {
        const { suggestions, focused } = this.state;

        return (
            <div className="field">
                <Input
                    placeholder="Yo! Type some ..."
                    handleChange={ this._handleChange.bind(this) }
                    handleFocus={ this._handleFocus.bind(this) }
                    handleBlur={ this._handleBlur.bind(this) }
                />
                <SuggestionsBox
                    visible={ focused }
                    suggestions={ suggestions }
                />
            </div>
        );
    }

}

export default AutoComplete;
