import React, { Component } from 'react';
import { asField } from 'informed';
import { withTheme } from 'styled-components';
import Select from 'react-select';
import { InputContainer, InputError, FieldFonts, Label, InputIcon, InputGroup,
  selectControlStyled, selectOptionStyled, selectContainerStyled, selectSingleValueStyled, selectMenuStyled, selectInputStyled } from './Style';

class SelectField extends Component {

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

  onChange = (option) => {
    if(this.props.onChange) {
      this.props.onChange(option)
    }
  }

  render() {
    const {fieldState, fieldApi} = this.props;
    let { value } = fieldState;
    const { setValue, setTouched } = fieldApi;
    const {
      onChange,
      onBlur,
      helperText,
      isRequired,
      initialValue,
      icon,
      label,
      afterIcon,
      appearance,
      theme,
      ...rest
    } = this.props;
    const isFilled = value ? true : false
    return (
      <React.Fragment>
        <FieldFonts/>
        <InputContainer appearance={appearance} className='form-component-module'>
          <Label isFocused={this.state.isFocused} hasIcon={icon} isFilled={isFilled} title={label} isSelectFieldLabel>{label}</Label>
          <InputGroup>
            <InputIcon appearance={appearance} isFocused={this.state.isFocused} isFilled={isFilled} isSelectFieldIcon>
              {icon}
            </InputIcon>
            <Select {...rest} appearance={appearance} value={value || initialValue || ''} styles={{
              container: selectContainerStyled({theme, appearance}),
              control: selectControlStyled({theme,appearance}),
              placeholder: (provided, state) => {
                const opacity = state.isFocused ? '0' : .5
                return {
                  ...provided,
                  lineHeight: 1.5,
                  padding: '10px',
                  fontSize: '15px',
                  opacity,
                  color: '#6c757d'
                }
              },
              singleValue: selectSingleValueStyled({theme, appearance}),
              menu: selectMenuStyled({theme, appearance}),
              option: selectOptionStyled({theme, appearance}),
              input: selectInputStyled({theme, appearance})
            }}
              onChange={
                (option)=>{
                  const {label, value} = option;
                  setValue({label,value});
                  this.onChange(option);
                }
              }
              onBlur={e=>{
                setTouched();
                this.toggleFocus()
              }}
              onFocus={() => {
                this.toggleFocus()
              }}/>
            {
              afterIcon &&
              <InputIcon appearance={appearance} isAfterIcon={afterIcon}>
                {afterIcon}
              </InputIcon>
            }
          </InputGroup>
          {
            fieldState.error && <InputError>&#9888; {fieldState.error}</InputError>
          }
        </InputContainer>
      </React.Fragment>

    )
  }

}

SelectField.defaultProps = {
  appearance: 'default',
  theme: {
    mode: 'light'
  }
}

export default asField(withTheme(SelectField));
