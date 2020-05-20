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

const Input = props => {
    const {value, setValue} = useState("")
    return (
        
            <input type="text">
                {value}
            </input>
        
    )
}

render(<App children={[listElement("gege"), listElement("tekst testowy"), Button, <Input/>]}/>, document.querySelector('.root'));