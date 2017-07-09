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
        this.setState({
            suggestions: this.props.suggestionsProvider(input)
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

AutoComplete.propTypes = {
    suggestionsProvider: PropTypes.func
};

AutoComplete.defaultProps = {
    suggestionsProvider: () => []
};

export default AutoComplete;
