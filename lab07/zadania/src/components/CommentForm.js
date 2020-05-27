import React, {useState} from 'react';

const ComponentForm = (props) => {
    const [name, setName] = useState("name");
    const [email, setEmail] = useState("email");
    const [body, setBody] = useState("body");
    const [errors, setErrors] = useState([]);
    
    const handleNameChange = (e) => {
        if (e.target.value.length <= 0 || e.target.value.length > 10) {
            if(!errors.includes('wrong name')) {
                setErrors([...errors, 'wrong name'])
            }
        }
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        if(e.target.value.length >= 0) {
            console.log(validateEmail(e.target.value))
            if (!errors.includes('wrong email') && !validateEmail(e.target.value)) {
                setErrors([...errors, 'wrong email'])
            }
        }
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

    const validateEmail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} required></input>
                <input type="email" value={email} onChange={handleEmailChange} required noValidate></input>
                <input type="textarea" value={body} onChange={handleBodyChange}></input>
                <input type="submit" value="submit"/>
                {
                    errors && errors.map(error => <label key="error">{error}</label>)
                }
            </form>
            
        </>
    );
}

export default ComponentForm;