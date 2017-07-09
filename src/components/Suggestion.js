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
                onClick={ handleClick }
                className="suggest-item"
            >
                <a href="">{ item }</a>
            </li>
        );
    }

}

export default Suggestion;
