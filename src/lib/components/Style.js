import styled, {createGlobalStyle} from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';

export const primaryColor = '#c1071a';
export const subtlePrimaryColor = 'rgba(193, 7, 26, 0.77)';
const errorColor = 'rgb(172, 26, 0)';

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

export const Label = styled.label`
  position: relative;
  display: block;
  width: 70%;
  left: 3.85em;
  font-size: 0.9em;
  opacity: .7;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all .3s ease-out;
  text-shadow: ${props => props.isFocused || props.isFilled? '0 0 10px rgba(83, 83, 83, 0.1)' : 'none'};
  color: ${
    props =>
      (props.isFocused && primaryColor) ||
      (props.isFilled && subtlePrimaryColor) ||
      'inherit'
    }
`;

export const InputIcon = styled.span`
  z-index: 1;
  color: ${
    props =>
      (props.isFocused && primaryColor) ||
      (props.isFilled && subtlePrimaryColor) ||
       'inherit'
  };
  position: absolute;
  bottom:28%;
  ${props => !props.isAfterIcon ? 'left: 20px;' : 'right: -15%;'}
  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;
`

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
export const InputStyled = styled.input`
  text-indent: ${props => props.isFocused || props.isFilled ? 3 : 3.5}em;
  outline: 0;
  padding: 10px;
  font-size: 15px;
  border:none;
  border-bottom: 1px solid #eee;
  border-color: ${
    props =>
      (props.isFocused && primaryColor) ||
      (props.isFilled && subtlePrimaryColor)
    };
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
    color: ${primaryColor};
  }
`
