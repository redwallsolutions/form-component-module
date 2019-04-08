import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  outline: 0;\n  padding: 10px;\n  padding-left: calc(10px", ");\n  font-size: 15px;\n  border:none;\n  border-bottom: 1px solid #eee;\n  border-color: ", ";\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  background-color: transparent;\n  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;\n  color: ", ";\n\n  &::placeholder {\n    color: #6c757d;\n    opacity: .5;\n  }\n  &:focus::placeholder {\n    color: ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-indent: ", "em;\n  ", "\n  outline: 0;\n  padding: 10px;\n  font-size: 15px;\n  border:none;\n  border-bottom: 1px solid #eee;\n  border-color: ", ";\n  display: block;\n  width: 100%;\n  line-height: 1.5;\n  background-clip: padding-box;\n  background-color: transparent;\n  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;\n  color: ", ";\n\n  &::placeholder {\n    color: #6c757d;\n    opacity: .5;\n  }\n  &:focus::placeholder {\n    color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 1em 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 1.3em;\n  color: ", ";\n  font-size: 0.9em;\n  font-weight: lighter;\n  margin-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 90%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1;\n  position: absolute;\n  bottom:28%;\n  ", "\n  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: block;\n  width: 70%;\n  left: ", "em;\n  font-size: 0.9em;\n  opacity: .7;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  transition: all .3s ease-out;\n  text-shadow: ", ";\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @font-face {\n    font-family: Poppins;\n    src: url(", "), format(\"TrueType\");\n    font-display: fallback;\n  }\n\n  .form-component-module {\n    color: rgb(69,69,69);\n    font-family: Poppins, sans-serif;\n  }\n  .form-component-module * {\n    box-sizing: border-box;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled, { createGlobalStyle, css } from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
import theming from 'styled-theming';
import RedwallColorPallete from 'color-pallete-component-module';
import Color from 'color';
var errorColor = 'rgb(172, 26, 0)';
var theme = theming.variants('mode', 'appearance', {
  primary: {
    light: {
      color: function color(props) {
        return props.theme.primary || RedwallColorPallete.primary;
      },
      contrast: function contrast(props) {
        return props.theme.primaryContrast || RedwallColorPallete.primaryContrast;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.primaryDark || RedwallColorPallete.primaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.primaryDarkContrast || RedwallColorPallete.primaryDarkContrast;
      }
    }
  },
  secondary: {
    light: {
      color: function color(props) {
        return props.theme.secondary || RedwallColorPallete.secondary;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryContrast || RedwallColorPallete.secondaryContrast;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.secondaryDark || RedwallColorPallete.secondaryDark;
      },
      contrast: function contrast(props) {
        return props.theme.secondaryDarkContrast || RedwallColorPallete.secondaryDarkContrast;
      }
    }
  },
  default: {
    light: {
      color: function color(props) {
        return props.theme.default || RedwallColorPallete.neutral;
      },
      contrast: function contrast(props) {
        return props.theme.defaultContrast || RedwallColorPallete.neutralContrast;
      }
    },
    dark: {
      color: function color(props) {
        return props.theme.defaultDark || RedwallColorPallete.neutralDark;
      },
      contrast: function contrast(props) {
        return props.theme.defaultDarkContrast || RedwallColorPallete.neutralDarkContrast;
      }
    }
  }
});
var defaultTheme = {
  theme: {
    mode: 'light'
  }
};

var defaultProps = _objectSpread({}, defaultTheme);

defaultProps.appearance = 'primary';
export var FieldFonts = createGlobalStyle(_templateObject(), Poppins);
var colorWhenFocusedOrFilled = css(_templateObject2(), function (props) {
  return props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : 'inherit';
});
var Label = styled.label(_templateObject3(), function (props) {
  return props.hasIcon ? 3.85 : .72;
}, function (props) {
  return props.isFocused || props.isFilled ? '0 0 10px rgba(83, 83, 83, 0.1)' : 'none';
}, colorWhenFocusedOrFilled);
Label.defaultProps = defaultProps;
export { Label };
var InputIcon = styled.span(_templateObject4(), function (props) {
  return !props.isAfterIcon ? 'left: 20px;' : 'right: -24px;';
}, colorWhenFocusedOrFilled);
InputIcon.defaultProps = _objectSpread({}, defaultProps);
export { InputIcon };
export var InputGroup = styled.div(_templateObject5());
export var InputError = styled.div(_templateObject6(), errorColor);
export var InputContainer = styled.div(_templateObject7());
var InputStyled = styled.input(_templateObject8(), function (props) {
  return props.isFocused || props.isFilled ? 3 : 3.5;
}, function (props) {
  return !props.hasIcon && 'text-indent: 0;';
}, function (props) {
  return props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : '#eee';
}, function (props) {
  return props.isFilled && !props.isFocused ? 'rgb(100,100,100)' : 'inherit';
}, function (props) {
  return theme(props).color;
});
InputStyled.defaultProps = defaultProps;
export { InputStyled };
var TextAreaStyled = styled.textarea(_templateObject9(), function (props) {
  return props.hasIcon && ' + 3em';
}, function (props) {
  return props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : '#eee';
}, function (props) {
  return props.isFilled && !props.isFocused ? 'rgb(100,100,100)' : 'inherit';
}, function (props) {
  return theme(props).color;
});
TextAreaStyled.defaultProps = defaultProps;
export { TextAreaStyled };
export var selectControlStyled = function selectControlStyled(props) {
  return function (provided, state) {
    var textIndent = state.isFocused ? '1.5em' : '2.5em';
    var borderBottom = !state.isFocused ? '1px solid #eee' : "1px solid ".concat(theme(props).color(props));
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
  };
};
export var selectOptionStyled = function selectOptionStyled(props) {
  return function (provided, _ref) {
    var isFocused = _ref.isFocused,
        isSelected = _ref.isSelected;
    var color = isFocused && 'white';
    var backgroundColor = isFocused && Color(theme(props).color(props)).fade(.2).string() || isSelected && !isFocused && Color(theme(props).color(props)).fade(.9).string();
    return _objectSpread({}, provided, {
      color: color,
      backgroundColor: backgroundColor,
      ':active': {
        backgroundColor: Color(theme(props).color(props)).darken(.3).string(),
        color: 'white'
      }
    });
  };
};