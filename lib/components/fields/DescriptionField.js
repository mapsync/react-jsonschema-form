"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DescriptionField(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return _react2.default.createElement("span", null);
  }
  return _react2.default.createElement(
    "span",
    { className: "chip tooltip tooltip-right", "data-tooltip": description },
    _react2.default.createElement("i", { className: "icon icon-message" })
  );
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: _propTypes2.default.string,
    description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
  };
}

exports.default = DescriptionField;