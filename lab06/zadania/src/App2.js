const Test = React.createElement('li', null, "test")
const App = React.createElement('ul', {className: "newElement"}, Test)

ReactDOM.render(App, document.querySelector('.root'));