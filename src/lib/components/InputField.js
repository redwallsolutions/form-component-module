import React from 'react';
import * as utils from '../utils';
import InputFieldComponent from './InputFieldComponent';


class InputField extends React.Component {
  render() {
    const {maskType, mask, ...rest} = this.props
    const defaultMask = value => value
    return (
      <InputFieldComponent mask={mask || utils[maskType] || defaultMask} {...rest}/>
    )
  }
}

InputField.defaultProps = {
  appearance: 'default'
}

export default InputField;
