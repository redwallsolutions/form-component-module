import React, { FC, InputHTMLAttributes } from 'react'
import utils from '../utils'
import Field from './Field'
import { IInputElement, IInputElementStyled } from './intefaces'

const InputField: FC<
	IInputElement & IInputElementStyled & InputHTMLAttributes<HTMLElement>
> = ({ mask, maskType = 'default', ...rest }) => {
	return <Field mask={mask || utils[maskType]} {...rest} />
}

export default InputField
