import React, { Component } from 'react';
import { asField } from 'informed';
import { InputStyled, InputIcon, InputError, Label, FieldFonts } from './Style';
import { InputGroup, InputContainer } from './Style';

class InputFieldComponent extends Component {

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
      appearance,
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
          <Label appearance={appearance} hasIcon={icon} isFocused={this.state.isFocused} isFilled={isFilled} title={label}>{label}</Label>
          <InputGroup>
            <InputIcon appearance={appearance} isFocused={this.state.isFocused} isFilled={isFilled}>
              {icon}
            </InputIcon>
            <InputStyled {...rest}
              appearance={appearance}
              hasIcon={icon}
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
              <InputIcon appearance={appearance} isAfterIcon={afterIcon}>
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

export default asField(InputFieldComponent);
