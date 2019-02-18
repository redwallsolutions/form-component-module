import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-indent: ", "em;\n  outline: 0;\n  padding: 10px;\n  font-size: 15px;\n  background-color: #fff;\n  border:none;\n  border-bottom: 1px solid #eee;\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  background-clip: padding-box;\n  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;\n  box-sizing: border-box;\n  &:focus{\n    border-color: ", ";\n  }\n  &::placeholder {\n    color: #6c757d;\n    opacity: .5;\n  }\n  &:focus::placeholder {\n    color: ", ";\n  }\n  &:not([value=\"\"]) {\n    border-color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  margin-left: 20px;\n  font-size: 0.9em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: ", ";\n  align-items: center;\n  margin-bottom: .5em;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  margin-left: -21px;\n  margin-top: -24px;\n  font-size: 0.9em;\n  opacity: .7;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", "), format(\"TrueType\");\n    font-display: fallback;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    overflow:hidden;\n    font-family: Poppins, sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle } from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
var primaryColor = '#c1071adb';
export var FieldFonts = createGlobalStyle(_templateObject(), Poppins);
export var Label = styled.label(_templateObject2());
export var InputIcon = styled.span(_templateObject3(), function (props) {
  return props.isFocused ? primaryColor : 'inherit';
});
export var FormGroup = styled.div(_templateObject4(), function (props) {
  return props.justify;
});
FormGroup.defaultProps = {
  justify: 'center'
};
export var InputError = styled.div(_templateObject5(), primaryColor);
export var InputStyled = styled.input(_templateObject6(), function (props) {
  return props.isFocused ? 3 : 3.5;
}, primaryColor, primaryColor, primaryColor);