import React, { FC } from 'react'
import { Form, BasicFormProps, FormValues } from 'informed'

const FormWrapper: FC<BasicFormProps> = ({ onSubmit, children, ...rest }) => {
	const customSubmitHandler = (values: FormValues) => {
		let innerValues: any = {}
		Object.keys(values)
			.filter(key => values[key] !== '🔤')
			.forEach(key => {
				innerValues[key] = values[key]
			})
		if (onSubmit) {
			onSubmit(innerValues)
		}
	}

	return (
		<Form onSubmit={customSubmitHandler} {...rest}>
			{children}
		</Form>
	)
}

export default FormWrapper
