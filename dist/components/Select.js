"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.object.assign.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Select = _ref => {
  let {
    label,
    title,
    options,
    componentStyle,
    labelStyle,
    selectStyle,
    optionStyle,
    onChangeValue,
    stateValue
  } = _ref;
  const select = {};
  const component = {
    display: "flex",
    flexDirection: "column"
  };
  const handleChange = e => {
    console.log(e.target.value);
    onChangeValue(e.target.value);
    console.log("state", stateValue);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App",
    style: Object.assign(component, componentStyle)
  }, /*#__PURE__*/_react.default.createElement("label", {
    for: label,
    style: labelStyle
  }, title), /*#__PURE__*/_react.default.createElement("select", {
    name: label,
    id: label,
    value: stateValue,
    onChange: handleChange,
    style: Object.assign(select, selectStyle)
  }, options.map((item, index) => /*#__PURE__*/_react.default.createElement("option", {
    value: item.value,
    style: optionStyle,
    key: index
  }, item.title))));
};
var _default = Select;
exports.default = _default;