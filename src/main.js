import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './components/AutoComplete';

/**
 *
 * @param input
 * @returns {Array}
 */
const cocktailSearch = (input) => {
    const cocktailBank = ['Manhattan', 'Sangria', 'Mojito', 'Bloody Mary', 'Cosmopolitan', 'Tequilla Sunrise'];

    return input
        ? cocktailBank.filter((word) => {
            return word.toLowerCase().indexOf(input.trim().toLowerCase()) > -1;
        })
        : [];
};

ReactDOM.render(
    <AutoComplete suggestionsProvider={ cocktailSearch } />,
    document.getElementById('root')
);