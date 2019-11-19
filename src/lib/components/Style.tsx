import styled, { createGlobalStyle, css } from 'styled-components'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import {
	IInputElementInteraction,
	IInputElementStyled
} from './intefaces'
import Color from 'color'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

const theming = createThemeWithAppearance()

const csscolor = css`
	${props =>
		Color(theming(props).color(props))
			.grayscale()
			.lighten(props.theme.mode === 'light' ? 0 : 0.8)
			.darken(props.theme.mode === 'dark' ? 0 : 0.5)
			.toString()};
`

export const Reset = createGlobalStyle`
  .form-component-module {
    width: 100%;
    height: auto;
    font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
    &, & * {
      transition: .3s;
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
	box-shadow: 0 0 0 ${props => (props.isFocused || props.isFilled ? 2 : 1)}px
		${props =>
			props.isFocused || props.isFilled ? theming(props).color(props) : 'grey'};
	transition-duration: 0.5s;
	&:hover {
		${props =>
			!props.isFocused &&
			!props.isFilled &&
			`box-shadow: 0 0 0 1px ${Color(theming(props).color(props)).grayscale().toString()}`}
	}
	margin: 10px;
`

export const LeadingIcon = styled.i``

export const LabelText = styled.label<IInputElementInteraction>`
	position: absolute;
	left: 12px;
	top: ${props =>
		props.isFocused || props.isFilled ? '10%' : 'calc(50% - 9.5px)'};
	z-index: 0;
	color: ${props =>
		props.isFocused || props.isFilled
			? Color(theming(props).color(props))
					.alpha(0.85)
					.toString()
			: props.theme.mode === 'light'
			? 'rgba(100,100,100)'
			: 'rgba(200,200,200, 0.4)'};
	transition-timing-function: cubic-bezier(0.38, 0.86, 0.05, 1);
	font-size: ${props => (props.isFocused || props.isFilled ? 12 : 14)}px;
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
	border-radius: 4px;
	z-index: 1;
	background: transparent;
	color: ${csscolor};
	&:focus{
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
	color: ${csscolor} svg {
		fill: ${csscolor};
	}
`

export const HelperText = styled.small``
