import React, { Component } from 'react';
import { asField } from 'informed';
import Select from 'react-select';
import { InputContainer, InputError, FieldFonts, Label, InputIcon, InputGroup, primaryColor, subtlePrimaryColor } from './Style';

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
      ...rest
    } = this.props;
    const isFilled = value ? true : false
    return (
      <React.Fragment>
        <FieldFonts/>
        <InputContainer className='form-component-module'>
          <Label isFocused={this.state.isFocused} isFilled={isFilled} title={label} isSelectFieldLabel>{label}</Label>
          <InputGroup>
            <InputIcon isFocused={this.state.isFocused} isFilled={isFilled} isSelectFieldIcon>
              {icon}
            </InputIcon>
            <Select {...rest} value={value || initialValue || ''} styles={{
              container: (provided, state) => ({
                ...provided,
                width: '100%',
              }),
              control: (provided, state) => {
                const textIndent = state.isFocused ? '1.5em' : '2.5em';
                const borderBottom = !state.isFocused ? '1px solid #eee' : `1px solid ${primaryColor}`;
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
              },
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
              singleValue: (provided, state) => {
                const textIndent = '3em';
                return {
                  ...provided,
                  textIndent
                }
              },
              menu: (provided, state) => {
                return {
                  ...provided,
                  zIndex: 2
                }
              },
              option: (provided, {isFocused,isSelected}) => {
                const color =
                (isFocused && 'white')
                const backgroundColor =
                (isFocused && subtlePrimaryColor) ||
                (isSelected && !isFocused && 'rgba(233, 211, 206, 0.7)')
                return {
                  ...provided,
                  color,
                  backgroundColor,
                  ':active': {
                    backgroundColor: subtlePrimaryColor,
                    color: 'white'
                  }
                }
              }
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
              <InputIcon>
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

export default asField(SelectField);
