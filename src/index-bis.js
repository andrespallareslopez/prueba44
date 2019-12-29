"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _wclayout = require("wclayout");

var _localjquery = _interopRequireDefault(require("localjquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cadenaweblatoutsstring = _react["default"].createElement(_wclayout.Layout, null);

_reactDom["default"].render(cadenaweblatoutsstring, document.querySelector(".container .pages")); //console.dir($)
