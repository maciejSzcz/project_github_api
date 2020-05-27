// zadanie 10

import React from 'react';
import { render } from 'react-dom';
import listElement from './components/elementListJSX';

const handleClick = () => {
    alert("proszę nie klikac guzika")
}

const Button = React.createElement('button', { onClick: handleClick }, "hehe")

const App = props => {
    return (
        <ul className="newElement">
            <hehe></hehe>
            <listElement />
        </ul>
    )
}

const Input = props => {
    const { value, setValue } = useState("")
    return (
        <input type="text">

        </input>

    )
}

render(<App />, document.querySelector('.root'));