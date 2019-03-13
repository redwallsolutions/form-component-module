import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-indent: ", "em;\n  outline: 0;\n  padding: 10px;\n  font-size: 15px;\n  background-color: #fff;\n  border:none;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  background-clip: padding-box;\n  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;\n  color: inherit;\n  &:focus{\n    border-color: ", ";\n  }\n  &::placeholder {\n    color: #6c757d;\n    opacity: .5;\n  }\n  &:focus::placeholder {\n    color: ", ";\n  }\n  &:not([value=\"\"]) {\n    border-color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 1em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  left: 1.3em;\n  color: ", ";\n  font-size: 0.9em;\n  font-weight: lighter;\n  margin-top: 3px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 90%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1;\n  color: ", ";\n  position: relative;\n  left: 2em;\n  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  width: 70%;\n  left: 5em;\n  font-size: 0.9em;\n  opacity: .7;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: all .5s ease-out;\n  text-shadow: ", ";\n  color: ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", "), format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .input-component-module {\n    color: rgb(69,69,69);\n    font-family: Poppins, sans-serif;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
export var primaryColor = '#c1071a';
var errorColor = 'rgb(172, 26, 0)';
export var FieldFonts = createGlobalStyle(_templateObject(), Poppins);
export var Label = styled.label(_templateObject2(), function (props) {
  return props.isFocused ? '0 0 20px rgba(83, 83, 83, 0.4)' : 'none';
}, function (props) {
  return props.isFocused ? primaryColor : 'rgb(69,69,69)';
});
export var InputIcon = styled.span(_templateObject3(), function (props) {
  return props.isFocused ? primaryColor : 'inherit';
});
export var InputGroup = styled.div(_templateObject4());
InputGroup.defaultProps = {
  justify: 'center'
};
export var InputError = styled.div(_templateObject5(), errorColor);
export var InputContainer = styled.div(_templateObject6());
export var InputStyled = styled.input(_templateObject7(), function (props) {
  return props.isFocused ? 3 : 3.5;
}, primaryColor, primaryColor, primaryColor);