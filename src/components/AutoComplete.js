import React from 'react';
import PropTypes from 'prop-types';

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

    /**
     *
     * @returns {Object}
     * @Todo: Refactor this + Move out of component
     */
    next() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        // find selected item
        let activeSuggestionIndex = -1;
        for (let i = 0; i < suggestions.length; i++) {
            if (suggestions[i].active) {
                activeSuggestionIndex = i;
            }
        }

        let next = 0;
        if (activeSuggestionIndex == -1) {
            next = 0;
        }
        else if (activeSuggestionIndex < suggestions.length - 1) {
            next = activeSuggestionIndex + 1;
        }
        else {
            next = 0;
        }

        suggestions.forEach((suggestion) => { suggestion.active = false; });
        suggestions[next].active = true;
        return suggestions[next];
    }

    _handleKeyDown(ev) {
        const key = ev.which;

        if (key === 40) {
            this.setState({
                value: this.next().value
            });
        }
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

    _handleClick(key, value) {
        // @Todo: Refactor + Move out of component
        const { suggestions } = this.state;
        suggestions.forEach((suggestion) => { suggestion.active = false; });
        suggestions[key].active = true;

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
        this.setState({
            suggestions: this.props.suggestionsProvider(input).map((item) => {
                return {
                    value: item,
                    active: false
                };
            })
        });
    }

    render() {
        const { value, focused, suggestions } = this.state;

        return (
            <div className="field" onBlur={ this._handleBlur.bind(this) }>
                <Input
                    placeholder="Yo! Type some ..."
                    valueText={ value }
                    handleKeyDown={ this._handleKeyDown.bind(this) }
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

AutoComplete.propTypes = {
    suggestionsProvider: PropTypes.func
};

AutoComplete.defaultProps = {
    suggestionsProvider: () => []
};

export default AutoComplete;
