import React from 'react'
import { IFieldElement, IFieldElementStyled } from '../lib/components/interfaces'

const Field: React.FC<IFieldElement & IFieldElementStyled> = ({
	appearance = 'default',
	field,
	initialValue,
	label,
	mask,
	shouldFitContainer,
	theme = { mode: 'light' },
	trailling,
	leading,
	isMultiline,
	...rest
}) => {
	return null
}

export default Field
