const Test = React.createElement('li', null, "test")
const App = React.createElement('ul', null, Test)

ReactDOM.render(App, document.querySelector('.root'));