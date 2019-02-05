import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { asField } from 'informed';
import { InputStyled, InputIcon } from './Style';
import { FormGroup } from './Style';

var Field =
/*#__PURE__*/
function (_Component) {
  _inherits(Field, _Component);

  function Field() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Field);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Field)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isFocused: false
    };

    _this.toggleFocus = function () {
      _this.setState({
        isFocused: !_this.state.isFocused
      });
    };

    _this.onFocus = function () {
      _this.toggleFocus();
    };

    return _this;
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _onChange = _this$props.onChange,
          _onBlur = _this$props.onBlur,
          initialValue = _this$props.initialValue,
          forwardedRef = _this$props.forwardedRef,
          fieldState = _this$props.fieldState,
          fieldApi = _this$props.fieldApi,
          icon = _this$props.icon,
          rest = _objectWithoutProperties(_this$props, ["onChange", "onBlur", "initialValue", "forwardedRef", "fieldState", "fieldApi", "icon"]);

      var value = fieldState.value;
      var setValue = fieldApi.setValue,
          setTouched = fieldApi.setTouched;
      return React.createElement(React.Fragment, null, React.createElement(FormGroup, null, React.createElement(InputIcon, {
        isFocused: this.state.isFocused
      }, icon), React.createElement(InputStyled, Object.assign({}, rest, {
        ref: forwardedRef,
        value: !value && value !== 0 ? '' : value,
        onChange: function onChange(e) {
          setValue(e.target.value);

          if (_onChange) {
            _onChange(e);
          }
        },
        onBlur: function onBlur(e) {
          setTouched();

          _this2.toggleFocus();

          if (_onBlur) {
            _onBlur(e);
          }
        },
        onFocus: this.onFocus,
        isFocused: this.state.isFocused
      }))));
    }
  }]);

  return Field;
}(Component);

export default asField(Field);