import React from 'react';
import { render } from 'react-dom';

const handleClick = () => {
    alert("proszę nie klikac guzika")
}

const Button = React.createElement('button', { onClick: handleClick }, "hehe")
const listElement = props => React.createElement('li', null, props)
const App = React.createElement('ul', {className: "newElement"}, listElement("gege"), listElement("tekst testowy"), Button)


render(App, document.querySelector('.root'));