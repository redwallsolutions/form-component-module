import React, { Component } from 'react';
import { asField } from 'informed';
import { InputStyled, InputIcon, InputError, Label, FieldFonts } from './Style';
import { InputGroup, InputContainer } from './Style';

class InputField extends Component {

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
    let { value } = fieldState;
    value = (value || value === '') ? value : (initialValue || '')
    const { setValue, setTouched } = fieldApi;
    const isFilled = (value && value !== '') ? true : false
    return (
      <React.Fragment>
        <FieldFonts/>
        <InputContainer className='form-component-module'>
          <Label isFocused={this.state.isFocused} isFilled={isFilled} title={label}>{label}</Label>
          <InputGroup>
            <InputIcon isFocused={this.state.isFocused} isFilled={isFilled}>
              {icon}
            </InputIcon>
            <InputStyled {...rest}
              ref={forwardedRef}
              value={value}
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
              isFocused={this.state.isFocused}
              isFilled={isFilled}/>
            {
              afterIcon &&
              <InputIcon isAfterIcon={afterIcon}>
                {afterIcon}
              </InputIcon>
            }
          </InputGroup>
          {
            fieldState.error &&
            <InputError title={fieldState.error} >&#9888; {fieldState.error}</InputError>
          }
        </InputContainer>
      </React.Fragment>
    );
  }
}

export default asField(InputField);
