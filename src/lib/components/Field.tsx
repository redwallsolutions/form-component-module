import React, {
	useState,
	ChangeEvent,
	FC,
	InputHTMLAttributes,
	MouseEvent,
	FocusEvent,
	useContext
} from 'react'
import {
	Container,
	Reset,
	InputText,
	LabelText,
	TraillingIcon,
	HelperText
} from './Style'
import { useField } from 'informed'
import { IInputElement, IInputElementStyled } from './interfaces'
import { OpenedEyes, ClosedEyes } from '../assets/Icons'
import { ThemeContext } from 'styled-components'

const TogglePassword: FC<any> = ({ onClick }) => {
	const [opened, setOpened] = useState(true)
	const onClickInner = (event: MouseEvent<HTMLSpanElement>) => {
		setOpened(!opened)
		if (onClick) {
			onClick(event)
		}
	}

	return opened ? (
		<OpenedEyes onClick={onClickInner} />
	) : (
		<ClosedEyes onClick={onClickInner} />
	)
}

const Field: FC<IInputElement &
	IInputElementStyled &
	InputHTMLAttributes<HTMLElement>> = ({
	shouldFitContainer,
	initialValue,
	label,
	trailling,
	theme = { mode: 'light' },
	type,
	appearance = 'default',
	onFocus,
	onBlur,
	onChange,
	mask,
	field,
	validate,
	required,
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false)
	const [typeAttr, setTypeAttr] = useState(type)
	const onFocusInner = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
		if (onFocus) {
			onFocus(event)
		}
	}
	const onBlurInner = (event: FocusEvent<HTMLInputElement>) => {
		setIsFocused(false)
		setTouched(true)
		if (onBlur) {
			onBlur(event)
		}
	}
	const onChangeInner = (event: ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		//🔤 emoji is a workaround to informed (lib) change where a empty string is treated as undefined value to fieldState
		setValue(value === '' ? '🔤' : value)
		if (onChange) {
			onChange(event)
		}
	}

	const onToggleShowPassword = () => {
		setTypeAttr(typeAttr === 'password' ? 'text' : 'password')
	}
	const themeToApply = useContext(ThemeContext) || theme
	const { fieldState, fieldApi, ref } = useField({ field, mask, initialValue, validate })
	const { setValue, setTouched } = fieldApi
	let { value, error } = fieldState
	value = value ? (value === '🔤' ? '' : value) : initialValue || ''
	const isFilled = value && value !== '' ? true : false
	return (
		<div className="form-component-module">
			<Reset />
			<Container
				shouldFitContainer={shouldFitContainer}
				isFocused={isFocused}
				isFilled={isFilled}
				theme={themeToApply}
				appearance={appearance}
			>
				<LabelText
					isFocused={isFocused}
					isFilled={isFilled}
					theme={themeToApply}
					appearance={appearance}
					title={label}
				>
					{label}
				</LabelText>
				<InputText
					ref={ref}
					value={value as any}
					onFocus={onFocusInner}
					onBlur={onBlurInner}
					onChange={onChangeInner}
					theme={themeToApply}
					appearance={appearance}
					type={typeAttr}
				/>

				{(type === 'password' || trailling) && (
					<TraillingIcon theme={themeToApply} appearance={appearance}>
						{type === 'password' ? (
							<TogglePassword onClick={onToggleShowPassword} />
						) : (
							trailling
						)}
					</TraillingIcon>
				)}
				{error && (
					<HelperText title={error} visible={error ? true : false}>
						{error}
					</HelperText>
				)}
			</Container>
		</div>
	)
}

export default Field
