import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { asField } from 'informed';
import Select from 'react-select';
import { InputContainer, InputError, FieldFonts, Label, InputIcon, InputGroup, primaryColor, subtlePrimaryColor } from './Style';

var SelectField =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectField)).call.apply(_getPrototypeOf2, [this].concat(args)));
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

  _createClass(SelectField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          fieldState = _this$props.fieldState,
          fieldApi = _this$props.fieldApi;
      var value = fieldState.value;
      var setValue = fieldApi.setValue,
          setTouched = fieldApi.setTouched;

      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          onBlur = _this$props2.onBlur,
          helperText = _this$props2.helperText,
          isRequired = _this$props2.isRequired,
          initialValue = _this$props2.initialValue,
          icon = _this$props2.icon,
          label = _this$props2.label,
          afterIcon = _this$props2.afterIcon,
          rest = _objectWithoutProperties(_this$props2, ["onChange", "onBlur", "helperText", "isRequired", "initialValue", "icon", "label", "afterIcon"]);

      var isFilled = value ? true : false;
      return React.createElement(React.Fragment, null, React.createElement(FieldFonts, null), React.createElement(InputContainer, {
        className: "form-component-module"
      }, React.createElement(Label, {
        isFocused: this.state.isFocused,
        isFilled: isFilled,
        title: label,
        isSelectFieldLabel: true
      }, label), React.createElement(InputGroup, null, React.createElement(InputIcon, {
        isFocused: this.state.isFocused,
        isFilled: isFilled,
        isSelectFieldIcon: true
      }, icon), React.createElement(Select, Object.assign({}, rest, {
        value: value || initialValue || '',
        styles: {
          container: function container(provided, state) {
            return _objectSpread({}, provided, {
              width: '100%'
            });
          },
          control: function control(provided, state) {
            var textIndent = state.isFocused ? '1.5em' : '2.5em';
            var borderBottom = !state.isFocused ? '1px solid #eee' : "1px solid ".concat(primaryColor);
            return _objectSpread({}, provided, {
              backgroundColor: 'transparent',
              textIndent: textIndent,
              border: 'none',
              borderBottom: borderBottom,
              borderRadius: 'none',
              boxShadow: 'none',
              ':hover': {
                borderBottom: borderBottom
              }
            });
          },
          placeholder: function placeholder(provided, state) {
            var opacity = state.isFocused ? '0' : .5;
            return _objectSpread({}, provided, {
              lineHeight: 1.5,
              padding: '10px',
              fontSize: '15px',
              opacity: opacity,
              color: '#6c757d'
            });
          },
          singleValue: function singleValue(provided, state) {
            var textIndent = '3em';
            return _objectSpread({}, provided, {
              textIndent: textIndent
            });
          },
          menu: function menu(provided, state) {
            return _objectSpread({}, provided, {
              zIndex: 2
            });
          },
          option: function option(provided, _ref) {
            var isFocused = _ref.isFocused,
                isSelected = _ref.isSelected;
            var color = isFocused && 'white';
            var backgroundColor = isFocused && subtlePrimaryColor || isSelected && !isFocused && 'rgba(233, 211, 206, 0.7)';
            return _objectSpread({}, provided, {
              color: color,
              backgroundColor: backgroundColor,
              ':active': {
                backgroundColor: subtlePrimaryColor,
                color: 'white'
              }
            });
          }
        },
        onChange: function onChange(option) {
          var label = option.label,
              value = option.value;
          setValue({
            label: label,
            value: value
          });
        },
        onBlur: function onBlur(e) {
          setTouched();

          _this2.toggleFocus();
        },
        onFocus: function onFocus() {
          _this2.toggleFocus();
        }
      })), afterIcon && React.createElement(InputIcon, null, afterIcon)), fieldState.error && React.createElement(InputError, null, "\u26A0 ", fieldState.error)));
    }
  }]);

  return SelectField;
}(Component);

export default asField(SelectField);