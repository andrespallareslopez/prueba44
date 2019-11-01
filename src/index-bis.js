"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Layout = require("src/lib/Layout.js");

var _importJquery = _interopRequireDefault(require("./import-jquery.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cadenaweblatoutsstring = _react["default"].createElement(_Layout.Layout, null);

_reactDom["default"].render(cadenaweblatoutsstring, document.querySelector(".container .pages")); //console.dir($)
