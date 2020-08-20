import React, {
  useState,
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  MouseEvent,
  FocusEvent,
  useContext,
  ReactElement,
  useEffect,
} from "react";
import {
  Container,
  Reset,
  InputText,
  LabelText,
  TraillingIcon,
  HelperText,
  RequiredIcon,
  LeadingIcon,
  TextArea,
} from "./Style";
import { useField } from "informed";
import { IFieldElement, IFieldElementStyled } from "./interfaces";
import { OpenedEyes, ClosedEyes } from "../assets/Icons";
import { ThemeContext } from "styled-components";

const TogglePassword: FC<any> = ({ onClick }) => {
  const [opened, setOpened] = useState(true);
  const onClickInner = (event: MouseEvent<HTMLSpanElement>) => {
    setOpened(!opened);
    if (onClick) {
      onClick(event);
    }
  };

  return opened ? (
    <OpenedEyes onClick={onClickInner} />
  ) : (
    <ClosedEyes onClick={onClickInner} />
  );
};

const Field: FC<IFieldElement &
  IFieldElementStyled &
  InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> = ({
  shouldFitContainer,
  initialValue,
  label,
  leading,
  trailling,
  theme = { mode: "light" },
  type,
  appearance = "default",
  onFocus,
  onBlur,
  onChange,
  mask,
  maskType,
  field,
  validate,
  validateOnChange = true,
  required,
  disabled,
  placeholder,
  isMultiline,
  getRef,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [typeAttr, setTypeAttr] = useState(type);
  const onFocusInner = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };
  const onBlurInner = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    setTouched(true);
    if (onBlur) {
      onBlur(event);
    }
  };
  const onChangeInner = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.currentTarget;
    //🔤 emoji is a workaround to informed (lib) change where a empty string is treated as undefined value to fieldState
    setValue(value === "" ? "🔤" : value);
    if (onChange) {
      onChange(event);
    }
    if (maskType === "money") {
      setTimeout(() => {
        ref.current.selectionStart = ref.current.selectionEnd =
          value.length + 5;
      }, 2);
    }
  };

  const onToggleShowPassword = () => {
    setTypeAttr(typeAttr === "password" ? "text" : "password");
  };
  const themeToApply = useContext(ThemeContext) || theme;
  const { fieldState, fieldApi, ref } = useField({
    field,
    mask,
    initialValue,
    validate,
    validateOnChange,
  });
  const { setValue, setTouched } = fieldApi;
  let { value, error } = fieldState;
  value = value ? (value === "🔤" ? "" : value) : initialValue || "";
  const isFilled = value && value !== "" ? true : false;
  const isntHidden = type !== "hidden";

  const fieldProps = {
    ...rest,
    disabled,
    ref,
    value,
    onFocus: onFocusInner,
    onBlur: onBlurInner,
    onChange: onChangeInner,
    theme: themeToApply,
    appearance,
    type: typeAttr,
    hasLeading: leading ? true : false,
  };

  useEffect(() => {
    if (getRef) {
      getRef(ref);
    }
  }, []);
  return (
    <div className="form-component-module">
      <Reset />
      {isntHidden ? (
        <Container
          shouldFitContainer={shouldFitContainer}
          isFocused={isFocused}
          isFilled={isFilled}
          isDisabled={disabled}
          theme={themeToApply}
          appearance={appearance}
          hasError={error ? true : false}
          isMultiline={isMultiline}
        >
          {leading && (
            <LeadingIcon theme={themeToApply} appearance={appearance}>
              {React.cloneElement(leading as ReactElement, { size: 24 })}
            </LeadingIcon>
          )}
          <LabelText
            isFocused={isFocused}
            isFilled={isFilled}
            theme={themeToApply}
            appearance={appearance}
            title={label}
            isMultiline={isMultiline}
            hasError={false}
            hasLeading={leading ? true : false}
          >
            {label}
            {required && <RequiredIcon />}
          </LabelText>
          {isMultiline ? (
            <TextArea {...fieldProps} />
          ) : (
            <InputText {...fieldProps} />
          )}

          {(type === "password" || trailling) && (
            <TraillingIcon theme={themeToApply} appearance={appearance}>
              {type === "password" ? (
                <TogglePassword onClick={onToggleShowPassword} />
              ) : (
                trailling
              )}
            </TraillingIcon>
          )}
          {error && <HelperText title={error}>{error}</HelperText>}
        </Container>
      ) : (
        <InputText {...rest} ref={ref} value={value as any} type={typeAttr} />
      )}
    </div>
  );
};

export default Field;
