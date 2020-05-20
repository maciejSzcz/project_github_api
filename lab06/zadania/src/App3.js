const Test = React.createElement('li', null, "test")
const App = React.createElement('ul', {className: "newElement"}, Test, Test, Test, Test, Test)

ReactDOM.render(App, document.querySelector('.root'));