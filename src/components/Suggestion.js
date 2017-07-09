import React from 'react';

class Suggestion extends React.Component {

    constructor() {
        super();
    }

    render() {
        const { item, handleClick } = this.props;

        return (
            <li
                key={ item }
                className="suggest-item"
                onClick={ () => handleClick(item) }
            >
                { item }
            </li>
        );
    }

}

export default Suggestion;
