import styled, {createGlobalStyle, css} from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';
import theming from 'styled-theming';
import RedwallColorPallete from 'color-pallete-component-module';
import Color from 'color';

export const primaryColor = '#c1071a';
export const subtlePrimaryColor = 'rgba(193, 7, 26, 0.77)';
const errorColor = 'rgb(172, 26, 0)';

const theme = theming.variants('mode','appearance', {
  primary: {
    light: {
      color: props => props.theme.primary || RedwallColorPallete.primary,
      contrast: props => props.theme.primaryContrast || RedwallColorPallete.primaryContrast
    },
    dark: {
      color: props => props.theme.primaryDark || RedwallColorPallete.primaryDark,
      contrast: props => props.theme.primaryDarkContrast || RedwallColorPallete.primaryDarkContrast
    }
  },
  secondary: {
    light: {
      color: props => props.theme.secondary || RedwallColorPallete.secondary,
      contrast: props => props.theme.secondaryContrast || RedwallColorPallete.secondaryContrast
    },
    dark: {
      color: props => props.theme.secondaryDark || RedwallColorPallete.secondaryDark,
      contrast: props => props.theme.secondaryDarkContrast || RedwallColorPallete.secondaryDarkContrast
    }
  },
  default: {
    light: {
      color: props => props.theme.default || RedwallColorPallete.neutral,
      contrast: props => props.theme.defaultContrast || RedwallColorPallete.neutralContrast
    },
    dark: {
      color: props => props.theme.defaultDark || RedwallColorPallete.neutralDark,
      contrast: props => props.theme.defaultDarkContrast || RedwallColorPallete.neutralDarkContrast
    }
  }
})

const defaultTheme = {
  theme: {
    mode: 'light'
  }
}

const defaultProps = {...defaultTheme}
defaultProps.appearance = 'primary'




export const FieldFonts = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }

  .form-component-module {
    color: rgb(69,69,69);
    font-family: Poppins, sans-serif;
  }
  .form-component-module * {
    box-sizing: border-box;
  }

`;

const colorWhenFocusedOrFilled = css`
  color: ${props => props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : 'inherit'};
`

const Label = styled.label`
  position: relative;
  display: block;
  width: 70%;
  left: ${props => props.hasIcon ? 3.85 : .72}em;
  font-size: 0.9em;
  opacity: .7;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all .3s ease-out;
  text-shadow: ${props => props.isFocused || props.isFilled ? '0 0 10px rgba(83, 83, 83, 0.1)' : 'none'};
  ${colorWhenFocusedOrFilled}
`;

Label.defaultProps = defaultProps

export {Label}

const InputIcon = styled.span`
  z-index: 1;
  position: absolute;
  bottom:28%;
  ${props => !props.isAfterIcon ? 'left: 20px;' : 'right: -24px;'}
  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;
  ${colorWhenFocusedOrFilled}
`

InputIcon.defaultProps = {...defaultProps}

export {InputIcon}

export const InputGroup = styled.div`
  position: relative;
`

export const InputError = styled.div `
  position: absolute;
  left: 1.3em;
  color: ${errorColor};
  font-size: 0.9em;
  font-weight: lighter;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 90%;
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 1em 5px;
`
const InputStyled = styled.input`
  text-indent: ${props => props.isFocused || props.isFilled ? 3 : 3.5}em;
  ${props => !props.hasIcon && 'text-indent: 0;'}
  outline: 0;
  padding: 10px;
  font-size: 15px;
  border:none;
  border-bottom: 1px solid #eee;
  border-color: ${props => props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : '#eee'};
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  background-color: transparent;
  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;
  color: ${
    props =>
      props.isFilled && !props.isFocused ? 'rgb(100,100,100)' : 'inherit'
  };

  &::placeholder {
    color: #6c757d;
    opacity: .5;
  }
  &:focus::placeholder {
    color: ${props => theme(props).color};
  }
`

InputStyled.defaultProps = defaultProps

export {InputStyled}

const TextAreaStyled = styled.textarea`
  outline: 0;
  padding: 10px;
  padding-left: calc(10px${props => props.hasIcon && ' + 3em'});
  font-size: 15px;
  border:none;
  border-bottom: 1px solid #eee;
  border-color: ${props => props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).darken(.3).string() : '#eee'};
  display: block;
  width: 100%;
  line-height: 1.5;
  background-color: transparent;
  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;
  color: ${
    props =>
      props.isFilled && !props.isFocused ? 'rgb(100,100,100)' : 'inherit'
  };

  &::placeholder {
    color: #6c757d;
    opacity: .5;
  }
  &:focus::placeholder {
    color: ${props => theme(props).color};
  }
`

TextAreaStyled.defaultProps = defaultProps

export {TextAreaStyled}

export const selectControlStyled = (props) => {
  return (provided, state) => {
    const textIndent = state.isFocused ? '1.5em' : '2.5em';
    const borderBottom = !state.isFocused ? '1px solid #eee' : `1px solid ${theme(props).color(props)}`;
    return {
      ...provided,
      backgroundColor: 'transparent',
      textIndent,
      border: 'none',
      borderBottom,
      borderRadius: 'none',
      boxShadow: 'none',
      ':hover': {
        borderBottom
      }
    }
  }
}

export const selectOptionStyled = (props) => {
  return (provided, {isFocused,isSelected}) => {
    const color =
    (isFocused && 'white')
    const backgroundColor =
    (isFocused && Color(theme(props).color(props)).fade(.2).string()) ||
    (isSelected && !isFocused && Color(theme(props).color(props)).fade(.9).string())
    return {
      ...provided,
      color,
      backgroundColor,
      ':active': {
        backgroundColor: Color(theme(props).color(props)).darken(.3).string(),
        color: 'white'
      }
    }
  }
}
