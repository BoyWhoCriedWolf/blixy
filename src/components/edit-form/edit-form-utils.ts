/* eslint-disable @typescript-eslint/no-explicit-any */
import { toNumber } from "lodash";
import moment from "moment";
import { FieldFormat, FieldRequiredType, StaticField } from "types/ui-types";

export function validatePassword(str: string): boolean {
  const pattern = /^[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]:;?<>,./-=]{12,}$/;
  return pattern.test(str);
}

export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneNumberRegex = /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/;
  return phoneNumberRegex.test(phoneNumber);
}

export const checkValidField = ({
  data = {} as any,
  value: propsValue,
  field = {} as StaticField,
}: {
  data?: any;
  value?: any;
  field?: Partial<StaticField>;
}) => {
  if (field.required === FieldRequiredType.Required) {
    const value = propsValue ?? data?.[field?.name ?? ""];

    // text
    if (field.type === FieldFormat.Text) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldFormat.Decimal) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldFormat.Integer) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldFormat.MultiLineText) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldFormat.Phone) {
      const formattedValue = ((value ?? "") as string).trim();
      return validatePhoneNumber(formattedValue);
    }
    if (field.type === FieldFormat.Password) {
      const formattedValue = ((value ?? "") as string).trim();
      return validatePassword(formattedValue);
    }
    if (field.type === FieldFormat.Money) {
      const formattedValue = ((value ?? "") as string).trim();
      return !!toNumber(formattedValue);
    }

    // date time
    if (field.type === FieldFormat.DateTime) {
      const formattedValue = ((value ?? "") as string).trim();
      return moment(formattedValue, "YYYY-MM-DDTHH:mm:ss", true).isValid();
    }

    // choice
    if (field.type === FieldFormat.Choice) {
      return !!value;
    }
    if (field.type === FieldFormat.MultiSelectChoice) {
      return Array.isArray(value);
    }

    // radio
    if (field.type === FieldFormat.Radio) {
      return !!value;
    }

    // two choices
    if (field.type === FieldFormat.TwoChoices) {
      return !!value;
    }
    if (field.type === FieldFormat.DropDown) {
      return !!value;
    } else if (field.type === FieldFormat.Checkbox) {
      return !!value;
    } else if (field.type === FieldFormat.Toggle) {
      return !!value;
    } else {
      return !!value;
    }
  }

  return true;
};
