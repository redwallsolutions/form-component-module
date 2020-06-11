import { ICommonProps } from "@redwallsolutions/common-interfaces-ts";

export type MaskType = "default" | "money" | "percent" | "cel" | "cpf";

export interface IFieldElementInteraction extends ICommonProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export interface IFieldWithIcon {
  hasLeading?: boolean;
}

export interface ILabelTextStyled {
  isMultiline?: boolean;
}

export interface IFieldElementStyled extends ICommonProps {
  /**
   * The shouldFitContainer defines if the input (or another field component, select, etc) will expand to
   * fit to parent width.
   */
  shouldFitContainer?: boolean;

  /**
   * The isMultiline prop defines if a InputField show behave itself as a textarea.
   */
  isMultiline?: boolean;
}

export interface IFieldElement {
  /**
   * The initialValue prop defines the initial value for the input (or another field component, select, etc).
   * This value will be assigned to "value" prop and then component will deal with it in its internal state.
   */
  initialValue?: any;

  /**
   * The label prop defines a label that appears at the top of the actived input.
   */
  label: string;

  /**
   * The leading prop defines, usually an icon that appear at the beginning of the input (or another field component, select, etc).
   */
  leading?: any;

  /**
   * The trailling prop defines, usually, an icon that appears in the end of input (or another field component, select, etc).
   */
  trailling?: any;

  /**
   * The mask prop defines a function that will mask the value of input. It receives the current value of the value and returns
   * the modified value.
   */
  mask?: (value: any) => any;

  /**
   * The maskType prop defines some of built-in mask function to input (or another field component, select, etc).
   */
  maskType?: MaskType;

  /**
   * The field prop defines the fieldname of the input. (required by informed lib.)
   */
  field: string;

  /**
   * The validate prop defines a validation function to be used to valid field data value.
   */
  validate?: (value: any) => any;

  /**
   * The validateOnChange prop defines if validation will occur every time a onChange event trigger.
   */
  validateOnChange?: boolean;
}
