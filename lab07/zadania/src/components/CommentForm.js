import React, {useState} from 'react';

const ComponentForm = (props) => {
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [body, setBody] = useState("body");
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Dodano");
        console.log(`imie: ${name}, email: ${email}, body: ${body}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange}></input>
            <input type="email" value={email} onChange={handleEmailChange}></input>
            <input type="textarea" value={body} onChange={handleBodyChange}></input>
            <input type="submit" value="submit"/>
        </form>
    );
}

export default ComponentForm;