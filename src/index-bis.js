"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jquery = _interopRequireWildcard(require("jquery"));

require("src/components/layouts/03layout02/03layout02.css");

require("src/components/menu-horizontal/03menu-horizontal01.css");

require("src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css");

require("src/components/panel/04PanelScroll02.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cadenaweblatoutsstring = _react["default"].createElement("div", null, _react["default"].createElement("header", null, _react["default"].createElement("div", {
  className: "logo"
}), _react["default"].createElement("h1", {
  className: "title-application"
}, "My Application")), _react["default"].createElement("div", {
  className: "main-body"
}, _react["default"].createElement("aside", {
  id: "menuvertical",
  className: "menu-area"
}), _react["default"].createElement("div", {
  id: "root",
  className: "wrapper page root"
}, _react["default"].createElement("div", {
  className: "nav"
}, _react["default"].createElement("nav", {
  "data-behavior": "navButtons03layout02"
})), _react["default"].createElement("div", {
  className: "main"
}, _react["default"].createElement("main", null, _react["default"].createElement("div", {
  className: "content",
  "data-template": "scroll02",
  "data-action": "panelform01"
}))), _react["default"].createElement("div", {
  className: "footer"
}, _react["default"].createElement("footer", null)))));

_reactDom["default"].render(cadenaweblatoutsstring, document.querySelector(".container .pages")); //console.dir($)
