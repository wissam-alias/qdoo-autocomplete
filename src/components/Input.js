import React from 'react';

class Input extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <input type="text" placeholder="Start typing ..." className="field-input" />
        );
    }

}

export default Input;
