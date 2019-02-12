import React, {Component} from 'react';
import {asField} from 'informed';
import {InputStyled, InputIcon, InputError} from './Style';
import {FormGroup} from './Style';

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
      ...rest
    } = this.props;
    const {value} = fieldState;
    const {setValue, setTouched} = fieldApi;
    return (<React.Fragment>
      <FormGroup>
        <InputIcon isFocused={this.state.isFocused}>
          {icon}
        </InputIcon>
        <InputStyled {...rest} ref={forwardedRef} value={!value && value !== 0
            ? ''
            : value
} onChange={e => {
            setValue(e.target.value);
            if (onChange) {
              onChange(e);
            }
          }
} onBlur={e => {
            setTouched();
            this.toggleFocus();
            if (onBlur) {
              onBlur(e);
            }
          }} onFocus={this.onFocus} isFocused={this.state.isFocused}/>
      </FormGroup>
      {
        fieldState.error
          ? (<InputError>{fieldState.error}</InputError>)
          : null
      }

    </React.Fragment>);
  }
}

export default asField(Field);
