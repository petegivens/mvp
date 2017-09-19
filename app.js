const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./client/components/App.jsx');
Window.username = prompt("Please enter your name");
console.log(Window.username)

ReactDOM.render(
  <App name={Window.username}/>,
  document.getElementById('app')
)
