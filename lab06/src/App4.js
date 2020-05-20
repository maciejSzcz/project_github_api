const listElement = props => React.createElement('li', null, props)
const App = React.createElement('ul', {className: "newElement"}, listElement("gege"), listElement("tekst testowy"))

ReactDOM.render(App, document.querySelector('.root'));