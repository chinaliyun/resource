var React = require('react');
var ReactDOM = require('react-dom');

var Root = React.createElement('h1');

var RootEle = React.server.renderToString(Root);


module.exports = React;