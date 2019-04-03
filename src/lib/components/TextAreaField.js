import React, { Component } from 'react';
import { asField } from 'informed';
import { TextAreaStyled, InputIcon, InputError, InputGroup, InputContainer, Label, FieldFonts } from './Style';
class TextAreaField extends Component {

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
          <Label hasIcon={icon} isFocused={this.state.isFocused} isFilled={isFilled} title={label}>{label}</Label>
          <InputGroup>
            <InputIcon isFocused={this.state.isFocused} isFilled={isFilled}>
              {icon}
            </InputIcon>
            <TextAreaStyled hasIcon={icon} {...rest}
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

export default asField(TextAreaField);
