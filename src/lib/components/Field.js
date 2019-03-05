import React, { Component } from 'react';
import { asField } from 'informed';
import { InputStyled, InputIcon, InputError, Label, FieldFonts } from './Style';
import { InputGroup, InputContainer } from './Style';

class Field extends Component {

  state = {
    isFocused: false
  }

  toggleFocus = () => {
    this.setState({
      isFocused: !this.state.isFocused
    });
  }

  onFocus = () => {
    this.toggleFocus();
  }

  render() {
    const {
      onChange,
      onBlur,
      initialValue,
      forwardedRef,
      fieldState,
      fieldApi,
      icon,
      label,
      afterIcon,
      ...rest
    } = this.props;
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const isValueEmpty = !value && value !== 0;
    return (
      <React.Fragment>
        <FieldFonts/>
        <InputContainer className='input-component-module'>
          <Label isFocused={this.state.isFocused} title={label}>{label}</Label>
          <InputGroup>
            <InputIcon isFocused={this.state.isFocused}>
              {icon}
            </InputIcon>
            <InputStyled {...rest}
              ref={forwardedRef}
              value={
                isValueEmpty ?
                '' :
                  value
              }
              onChange={e => {
                setValue(e.target.value);
                if (onChange) {
                  onChange(e);
                }
              }}
              onBlur={e => {
                setTouched();
                this.toggleFocus();
                if (onBlur) {
                  onBlur(e);
                }
              }}
              onFocus={this.onFocus}
              isFocused={this.state.isFocused}/>
            {
              afterIcon &&
              <InputIcon>
                {afterIcon}
              </InputIcon>
            }
          </InputGroup>
          {
            fieldState.error ?
              (<InputError title={fieldState.error}>{fieldState.error}</InputError>) :
              null
          }
        </InputContainer>
      </React.Fragment>
    );
  }
}

export default asField(Field);
