import styled from 'styled-components';

const primaryColor = '#c1071adb';

export const InputIcon = styled.span`
  z-index: 1;
  color: ${props => props.isFocused ? primaryColor : 'inherit'};
  position: relative;
  left: 2em;
  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;
`

export const FormGroup = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
  margin-bottom: .5em;
`

FormGroup.defaultProps = {
  justify: 'center'
}

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
