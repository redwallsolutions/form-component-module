import React, { FC, HTMLAttributes, InputHTMLAttributes } from "react";
import utils from "../utils";
import Field from "./Field";
import { IFieldElement, IFieldElementStyled } from "./interfaces";

const InputField: FC<IFieldElement &
  IFieldElementStyled &
  InputHTMLAttributes<HTMLInputElement>> = ({
  mask,
  maskType = "default",
  required,
  validate,
  ...rest
}) => {
  return (
    <Field
      mask={mask || utils[maskType]}
      maskType={maskType}
      required={required}
      validate={required ? utils.isEmpty : validate}
      {...rest}
    />
  );
};

export default InputField;
