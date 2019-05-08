import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import * as utils from '../utils';
import InputFieldComponent from './InputFieldComponent';

var InputField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputField, _React$Component);

  function InputField() {
    _classCallCheck(this, InputField);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputField).apply(this, arguments));
  }

  _createClass(InputField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          maskType = _this$props.maskType,
          mask = _this$props.mask,
          rest = _objectWithoutProperties(_this$props, ["maskType", "mask"]);

      var defaultMask = function defaultMask(value) {
        return value;
      };

      return React.createElement(InputFieldComponent, Object.assign({
        mask: mask || utils[maskType] || defaultMask
      }, rest));
    }
  }]);

  return InputField;
}(React.Component);

InputField.defaultProps = {
  appearance: 'default'
};
export default InputField;