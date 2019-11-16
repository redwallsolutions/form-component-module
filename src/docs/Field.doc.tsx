import React from 'react'
import { IInputElement, IInputElementStyled } from '../lib/components/intefaces'

const Field: React.FC<IInputElement & IInputElementStyled> = ({
	appearance = 'default',
	field,
	initialValue,
	label,
	mask,
	shouldFitContainer,
	theme = { mode: 'light' },
	trailling,
	...rest
}) => {
	return null
}

export default Field
