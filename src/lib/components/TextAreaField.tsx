import React, { FC, InputHTMLAttributes } from "react";
import utils from "../utils";
import Field from "./Field";
import { IFieldElement, IFieldElementStyled } from "./interfaces";

const TextAreaField: FC<IFieldElement &
  IFieldElementStyled &
  InputHTMLAttributes<HTMLElement>> = ({
  mask,
  maskType = "default",
  required,
  validate,
  ...rest
}) => {
  return (
    <Field
      mask={mask || utils[maskType]}
      required={required}
      validate={required ? utils.isEmpty : validate}
      isMultiline
      {...rest}
    />
  );
};

export default TextAreaField;
