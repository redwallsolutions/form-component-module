import React, { FC, InputHTMLAttributes } from 'react'
import utils from '../utils'
import Field from './Field'
import { IFieldElement, IFieldElementStyled } from './interfaces'

const InputField: FC<IFieldElement &
	IFieldElementStyled &
	InputHTMLAttributes<HTMLElement>> = ({
	mask,
	maskType = 'default',
	required,
	validate,
	...rest
}) => {
	return (
		<Field
			mask={mask || utils[maskType]}
			required={required}
			validate={required ? utils.isEmpty : validate}
			{...rest}
		/>
	)
}

export default InputField
