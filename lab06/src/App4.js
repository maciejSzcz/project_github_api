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
            {props.children}
        </ul>
    )
}

render(<App children={[listElement("gege"), listElement("tekst testowy"), Button]}/>, document.querySelector('.root'));