import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import * as utils from '../utils';
import InputFieldComponent from './InputFieldComponent';
export default (function (props) {
  var maskType = props.maskType,
      mask = props.mask,
      rest = _objectWithoutProperties(props, ["maskType", "mask"]);

  var defaultMask = function defaultMask(value) {
    return value;
  };

  return React.createElement(InputFieldComponent, Object.assign({
    mask: mask || utils[maskType] || defaultMask
  }, rest));
});