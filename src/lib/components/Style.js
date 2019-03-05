import styled, {createGlobalStyle} from 'styled-components';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';

const primaryColor = '#c1071a';

export const FieldFonts = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }

  .input-component-module {
    color: rgb(69,69,69);
    font-family: Poppins, sans-serif;
  }
`;

export const Label = styled.label `
  display: block;
  margin-left: 79px;
  font-size: 0.9em;
  opacity: .7;
  font-weight: bold;
  transition: all .5s ease-out;
  text-shadow: ${props => props.isFocused ? '0 0 20px rgba(83, 83, 83, 0.81)' : 'none'};
  color: ${props => props.isFocused ? primaryColor : 'rgb(69,69,69)'}
`;

export const InputIcon = styled.span`
  z-index: 1;
  color: ${props => props.isFocused ? primaryColor : 'inherit'};
  position: relative;
  left: 2em;
  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  margin-bottom: .5em;
  width: 100%;
`

InputGroup.defaultProps = {
  justify: 'center'
}

export const InputError = styled.div `
  color: ${primaryColor};
  margin-left: 20px;
  font-size: 0.9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InputContainer = styled.div`
  width: 280px;
`
export const InputStyled = styled.input`
  text-indent: ${props => props.isFocused ? 3 : 3.5}em;
  outline: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
  border:none;
  border-bottom: 1px solid #eee;
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;
  box-sizing: border-box;
  color: inherit;
  &:focus{
    border-color: ${primaryColor};
  }
  &::placeholder {
    color: #6c757d;
    opacity: .5;
  }
  &:focus::placeholder {
    color: ${primaryColor};
  }
  &:not([value=""]) {
    border-color: ${primaryColor};
  }
`
