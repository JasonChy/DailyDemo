/*应用入口文件*/
'use strict'; // 总是使用严格模式是一个种好习惯

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    _react2.default.createElement(_Logo2.default, null),
    'Welcome to the App!\u8BD5\u8BD5\u800C\u5DF234\u7684\u5E08\u5085\u773C\u775B\u5706\u53C8\u5706'
), document.getElementById('app'));