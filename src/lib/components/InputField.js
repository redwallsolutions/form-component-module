import React from 'react';
import * as utils from '../utils';
import InputFieldComponent from './InputFieldComponent';

export default props => {
  const {maskType, mask, ...rest} = props
  const defaultMask = value => value
  return (
    <InputFieldComponent mask={mask || utils[maskType] || defaultMask} {...rest}/>
  )
}
