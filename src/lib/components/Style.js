import styled, {createGlobalStyle, css} from 'styled-components';
import Color from 'color';
import Theming from 'theming-component-module';

const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  theme: {
    mode: 'light'
  },
  appearance: 'default'
}

const FieldFonts = createGlobalStyle`
  .form-component-module {
    font-family: Arial, Helvetica, Tahoma, Geneva, sans-serif;
    color: ${props => Color(theme(props).color(props)).grayscale().string()};
  }
`;

FieldFonts.defaultProps = defaultProps

export {FieldFonts}

const colorWhenFocusedOrFilled = css`
  color: ${props => props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).fade(.2).string() : 'inherit'};
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
  text-shadow: 0 0 2px ${props => props.isFocused || props.isFilled ? Color(theme(props).color(props)).fade(.7).string() : 'transparent'};
  ${colorWhenFocusedOrFilled}
`;

Label.defaultProps = defaultProps

export {Label}

const InputIcon = styled.span`
  z-index: 1;
  position: absolute;
  bottom:28%;
  ${props => !props.isAfterIcon ? 'left: 20px;' : 'right: -24px;'}
  transition: .2s ease-in-out;
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
  color: red;
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
  margin: ${props=> props.type === 'hidden' ? 0 : '1em 5px'};
`
const InputStyled = styled.input`
  text-indent: ${props => props.isFocused || props.isFilled ? 3 : 3.5}em;
  ${props => !props.hasIcon && 'text-indent: 0;'}
  outline: 0;
  padding: 10px;
  font-size: 15px;
  border:none;
  border-bottom: 1px solid #eee;
  border-color: ${props => props.isFocused ? theme(props).color : props.isFilled ? Color(theme(props).color(props)).fade(.7).string() : Color(theme(props).color(props)).grayscale().fade(.8).string()};
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  background-color: transparent;
  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;
  color: ${props => props.isFocused ? (props.theme.mode === 'light' ? Color(theme(props).color(props)).grayscale().string() : Color(theme(props).color(props)).grayscale().fade(.2).string()) : props.isFilled ? Color(theme(props).color(props)).grayscale().fade(.3).string() : 'inherit'};

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
    const color = isFocused ? theme(props).contrast(props) : isSelected ? theme(props).color(props) : theme(props).color(props)
    const backgroundColor =
    (isFocused && Color(theme(props).color(props)).fade(.2).string()) ||
    (isSelected && !isFocused && Color(theme(props).color(props)).fade(.9).string())
    return {
      ...provided,
      color,
      backgroundColor
    }
  }
}

export const selectSingleValueStyled = (props) => {
  return (provided, state) => {
    const color = Color(theme(props).color(props)).grayscale().fade(.2).string()
    return {
      ...provided,
      textIndent: '3em',
      color
    }
  }
}

export const selectMenuStyled = (props) => {
  return (provided, {isSelected, isFocused}) => {
    return {
      ...provided,
      zIndex: 2,
      background: theme(props).contrast(props),
      boxShadow: '0 0 20px 0 rgba(0,0,0,0.2)'
    }
  }
}

export const selectContainerStyled = (props) => {
  return (provided) => {
    return {
      ...provided,
      width: '100%'
    }
  }
}

export const selectInputStyled = (props) => {
  return (provided) => {
    return {
      ...provided,
      color: Color(theme(props).color(props)).grayscale().fade(.2).string()
    }
  }
}
