import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './components/AutoComplete';

/**
 * Mimics the value of a Promise returned after an Async call
 * to some remote service e.g. Youtube API, Google Places, etc.
 *
 * To be used by <Autocomplete />, needs to implement this "interface"
 *
 * @param input
 * @returns {Array}
 */
const cocktailSearch = (input) => {
    const cocktailBank = ['Manhattan', 'Sangria', 'Mojito', 'Bloody Mary', 'Cosmopolitan', 'Tequilla Sunrise',
        'Daiquiri', 'Fizz', 'Vodka Martini', 'Sex on the Beach', 'Irish Coffee'];

    return input
        ? cocktailBank.filter((word) => {
            return word.toLowerCase().indexOf(input.trim().toLowerCase()) > -1;
        })
        : [];
};

/**
 * Spit it out on the page
 */
ReactDOM.render(
    <AutoComplete suggestionsProvider={ cocktailSearch } />,
    document.getElementById('root')
);