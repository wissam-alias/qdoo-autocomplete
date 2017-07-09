import React from 'react';

import Input from './Input';
import SuggestionsBox from './SuggestionsBox';

class AutoComplete extends React.Component {

    constructor() {
        super();

        this.state = {
            value: '',
            focused: false,
            suggestions: []
        };
    }

    _handleChange(ev) {
        this.setState({
            value: ev.target.value
        });

        this.search(ev.target.value);
    }

    _handleFocusBehavior(ev) {
        this.setState({
            focused: true
        });
    }

    _handleClick(value) {
        this.setState({
            value: value
        });
    }

    _handleBlur(ev) {
        setTimeout(() => {
            this.setState({
               focused: false
            });
        }, 300);
    }

    search(input) {
        const wordBank = ['item0', 'item1', 'item2', 'item3', 'item123'];

        this.setState({
            suggestions: input
                ? wordBank.filter((word) => {
                    return word.indexOf(input) > -1;
                })
                : []
        });
    }

    render() {
        const { value, focused, suggestions } = this.state;

        return (
            <div className="field" onBlur={ this._handleBlur.bind(this) }>
                <Input
                    placeholder="Yo! Type some ..."
                    valueText={ value }
                    handleChange={ this._handleChange.bind(this) }
                    handleFocus={ this._handleFocusBehavior.bind(this) }
                />
                <SuggestionsBox
                    visible={ focused }
                    suggestions={ suggestions }
                    handleClick={ this._handleClick.bind(this) }
                />
            </div>
        );
    }

}

export default AutoComplete;
