import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { ReactNode } from 'react'
import { FieldState, FieldApi, BasicFieldProps } from 'informed'
import { any } from 'prop-types'

export type MaskType = 'default' | 'money' | 'percent' | 'cel'

export interface IInputElementInteraction extends ICommonProps {
	isFocused: boolean
	isFilled: boolean
}

export interface IInputElementStyled extends ICommonProps {
	shouldFitContainer?: boolean
}

export interface IInputElement {
	initialValue?: any
	label: string
	trailling?: ReactNode
	mask?: (value: any) => any
	maskType?: MaskType
	field:string
}
