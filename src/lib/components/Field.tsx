import React, {
	useState,
	ChangeEvent,
	FC,
	InputHTMLAttributes,
	MouseEvent,
	FocusEvent
} from 'react'
import { Container, Reset, InputText, LabelText, TraillingIcon } from './Style'
import { useField } from 'informed'
import { IInputElement, IInputElementStyled } from './intefaces'
import { OpenedEyes, ClosedEyes } from '../assets/Icons'

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

const Field: FC<
	IInputElement & IInputElementStyled & InputHTMLAttributes<HTMLElement>
> = ({
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

	const { fieldState, fieldApi, ref } = useField({field, mask, initialValue})
	const { setValue, setTouched } = fieldApi
	let { value } = fieldState
	value = value ? (value === '🔤' ? '' : value) : initialValue || ''
	const isFilled = value && value !== '' ? true : false
	return (
		<div className="form-component-module">
			<Reset />
			<Container
				shouldFitContainer={shouldFitContainer}
				isFocused={isFocused}
				isFilled={isFilled}
				theme={theme}
				appearance={appearance}
			>
				<LabelText
					isFocused={isFocused}
					isFilled={isFilled}
					theme={theme}
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
					theme={theme}
					appearance={appearance}
					type={typeAttr}
				/>

				{(type === 'password' || trailling) && (
					<TraillingIcon theme={theme} appearance={appearance}>
						{type === 'password' ? (
							<TogglePassword onClick={onToggleShowPassword} />
						) : (
							trailling
						)}
					</TraillingIcon>
				)}
			</Container>
		</div>
	)
}

export default Field
