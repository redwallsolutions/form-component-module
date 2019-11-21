import styled, { createGlobalStyle, keyframes } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import { IInputElementInteraction, IInputElementStyled } from './interfaces'
import Color from 'color'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

const theming = createThemeWithAppearance()

const isFilledOrFocused = (props: IInputElementInteraction) =>
	props.isFilled || props.isFocused

const isLight = (props: ICommonProps) =>
	props.theme && props.theme.mode === 'light'

export const Reset = createGlobalStyle`
  .form-component-module {
    width: 100%;
    height: auto;
    font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
    &, & * {
      transition: .2s;
      box-sizing: border-box;
    }
  }
`

export const Container = styled.div<
	IInputElementInteraction & IInputElementStyled
>`
	position: relative;
	min-width: 280px;
	width: ${props => (props.shouldFitContainer ? '100%' : '280px')};
	height: 56px;
	border-radius: 4px;
	box-shadow: 0 0 0 ${props => (isFilledOrFocused(props) ? 2 : 1)}px
		${props =>
			isFilledOrFocused(props) ? theming(props).color(props) : 'grey'};
	transition: none;
	background-color: ${props =>
		Color(theming(props).contrast(props))
			.lighten(0.4)
			.toString()};
	&:hover {
		${props =>
			!props.isFocused &&
			!props.isFilled &&
			`box-shadow: 0 0 0 1px ${Color(theming(props).color(props))
				.grayscale()
				.toString()}`}
	}
`

export const LeadingIcon = styled.i``

export const LabelText = styled.label<IInputElementInteraction>`
	position: absolute;
	left: 12px;
	text-align: left;
	top: calc(50% - 9.5px);
	z-index: 0;
	transform: ${props =>
		props.isFocused || props.isFilled
			? 'translateY(-75%) scale(.85)'
			: 'translateY(0) scale(1)'};
	transform-origin: left;
	will-change: transform;
	color: ${props =>
		isFilledOrFocused(props)
			? theming(props).color
			: Color(theming(props).color(props))
					.grayscale()
					.toString()};
	transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
		color 150ms cubic-bezier(0.4, 0, 0.2, 1);
	max-width: 94%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
`

export const InputText = styled.input<ICommonProps>`
	position: absolute;
	right: 0;
	width: 100%;
	padding-top: 15px;
	text-indent: 12px;
	height: 100%;
	font-size: 16px;
	box-shadow: none;
	border: none;
	z-index: 1;
	background: transparent;
	color: ${props => (isLight(props) ? 'rgb(100,100,100)' : 'rgb(200,200,200)')};
	&:focus {
		outline: 0;
	}
`

export const TraillingIcon = styled.i<ICommonProps>`
	position: absolute;
	right: 12px;
	top: calc(50% - 12px);
	width: 24px;
	height: 24px;
	cursor: pointer;
	z-index: 2;
	color: ${props => (isLight(props) ? 'rgb(100,100,100)' : 'rgb(200,200,200)')};
	svg {
		fill: ${props =>
			isLight(props) ? 'rgb(100,100,100)' : 'rgb(200,200,200)'};
	}
`

export const RequiredIcon = styled.span`
	color: #b00020ff;
	margin: 0 2px;
	&::before {
		content: '*'
	}
`

const zoomin = keyframes`
	0% {
		transform: translateY(-100%) scale(.9);
		opacity: 0;
	}

	30% {
		opacity: 0;
	}
	100% {
		transform: translateY(0) scale(1);
		opacity: 1;
	}
`

export const HelperText = styled.small`
	font-size: 12px;
	line-height: 16px;
	position: absolute;
	left: 12px;
	bottom: -35%;
	max-width: 95%;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	color: ${props =>
		isLight(props)
			? '#b00020ff'
			: Color('#b00020ff')
					.lighten(0.5)
					.toString()};
	animation-duration: 0.3s;
	animation-name: ${zoomin};
`
