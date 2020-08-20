import styled, { createGlobalStyle, keyframes } from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import {
  IFieldElementInteraction,
  IFieldElementStyled,
  IFieldWithIcon,
  ILabelTextStyled,
} from "./interfaces";
import Color from "color";
import { ICommonProps } from "@redwallsolutions/common-interfaces-ts";

const theming = createThemeWithAppearance();

const isFilledOrFocused = (props: IFieldElementInteraction) =>
  props.isFilled || props.isFocused;

const isLight = (props: ICommonProps) =>
  props.theme && props.theme.mode === "light";

export const Reset = createGlobalStyle`
  .form-component-module {
    width: 100%;
    height: auto;
    font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
    &, * {
      transition: .2s;
      box-sizing: border-box;
    }
  }
`;

export const Container = styled.div<
  IFieldElementInteraction & IFieldElementStyled
>`
  position: relative;
  width: ${(props) => (props.shouldFitContainer ? "100%" : "280px")};
  height: ${(props) => (props.isMultiline ? 100 : 65)}px;
  border-radius: 4px;
  box-shadow: 0 0 0 ${(props) => (isFilledOrFocused(props) ? 2 : 1)}px
    ${(props) =>
      isFilledOrFocused(props) ? theming(props).color(props) : "grey"};
  transition: none;
  background-color: ${(props) =>
    Color(theming(props).contrast(props))
      .lighten(0.4)
      .toString()};
  &:hover {
    ${(props) =>
      !props.isFocused &&
      !props.isFilled &&
      `box-shadow: 0 0 0 1px ${Color(theming(props).color(props))
        .grayscale()
        .toString()}`}
  }
  ${props => props.isDisabled && 'filter: grayscale(0.5);opacity: 0.5;cursor: not-allowed;'}
  margin-bottom: 30px;
  ${(props) =>
    props.hasError &&
    `box-shadow: 0 0 0 ${isFilledOrFocused(props) ? 2 : 1}px
		${
      isLight(props)
        ? "#b00020ff"
        : Color("#b00020ff")
            .lighten(0.5)
            .toString()
    } !important`}
`;

export const LabelText = styled.label<
  IFieldElementInteraction & IFieldWithIcon & ILabelTextStyled
>`
  position: absolute;
  left: ${(props) => (props.hasLeading ? 42 : 12)}px;
  text-align: left;
  top: calc(50% - 9.5px);
  z-index: 0;
  transform: ${(props) =>
    props.isFocused || props.isFilled
      ? `translateY(${props.isMultiline ? "-175%" : "-75%"}) scale(.85)`
      : "translateY(0) scale(1)"};
  transform-origin: left;
  will-change: transform;
  color: ${(props) =>
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
`;

export const InputText = styled.input<ICommonProps & IFieldWithIcon>`
  position: absolute;
  right: 0;
  width: 100%;
  padding-top: 15px;
  text-indent: ${(props) => (props.hasLeading ? 42 : 12)}px;
  height: 100%;
  font-size: 16px;
  box-shadow: none;
  border: none;
  z-index: 1;
  background: transparent;
  color: ${(props) =>
    isLight(props) ? "rgb(100,100,100)" : "rgb(200,200,200)"};
  &:focus {
    outline: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const TextArea = styled.textarea<ICommonProps & IFieldWithIcon>`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding-top: 25px;
  padding-left: ${(props) => (props.hasLeading ? 42 : 12)}px;
  box-shadow: none;
  border: none;
  z-index: 1;
  background: transparent;
  color: ${(props) =>
    isLight(props) ? "rgb(100,100,100)" : "rgb(200,200,200)"};
  &:focus {
    outline: 0;
  }
  resize: none;
`;

export const Icon = styled.i<ICommonProps>`
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 2;
  color: ${(props) =>
    isLight(props) ? "rgb(100,100,100)" : "rgb(200,200,200)"};
  svg {
    fill: ${(props) =>
      isLight(props) ? "rgb(100,100,100)" : "rgb(200,200,200)"};
  }
`;

export const TraillingIcon = styled(Icon)`
  right: 12px;
  top: calc(50% - 12px);
`;

export const LeadingIcon = styled(Icon)`
  left: 8px;
  top: calc(50% - 12px);
`;
export const RequiredIcon = styled.span`
  color: #b00020ff;
  margin: 0 2px;
  &::before {
    content: "*";
  }
`;

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
	`;

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
  color: ${(props) =>
    isLight(props)
      ? "#b00020ff"
      : Color("#b00020ff")
          .lighten(0.5)
          .toString()};
  animation-duration: 0.3s;
  animation-name: ${zoomin};
`;
