/* eslint-disable @typescript-eslint/no-explicit-any */
import { toNumber } from "lodash";
import moment from "moment";
import { FieldType, FieldRequiredType, StaticField } from "types/ui-types";

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
    if (field.type === FieldType.Text) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldType.Decimal) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldType.Integer) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldType.MultiLineText) {
      const formattedValue = ((value ?? "") as string).trim();
      return formattedValue.length > 0;
    }
    if (field.type === FieldType.Phone) {
      const formattedValue = ((value ?? "") as string).trim();
      return validatePhoneNumber(formattedValue);
    }
    if (field.type === FieldType.Password) {
      const formattedValue = ((value ?? "") as string).trim();
      return validatePassword(formattedValue);
    }
    if (field.type === FieldType.Money) {
      const formattedValue = ((value ?? "") as string).trim();
      return !!toNumber(formattedValue);
    }

    // date time
    if (field.type === FieldType.DateTime) {
      const formattedValue = ((value ?? "") as string).trim();
      return moment(formattedValue, "YYYY-MM-DDTHH:mm:ss", true).isValid();
    }

    // choice
    if (field.type === FieldType.Choice) {
      return !!value;
    }
    if (field.type === FieldType.MultiSelectChoice) {
      return Array.isArray(value);
    }

    // radio
    if (field.type === FieldType.Radio) {
      return !!value;
    }

    // two choices
    if (field.type === FieldType.TwoChoices) {
      return !!value;
    }
    if (field.type === FieldType.DropDownYesNo) {
      return !!value;
    } else if (field.type === FieldType.Checkbox) {
      return !!value;
    } else if (field.type === FieldType.Toggle) {
      return !!value;
    } else {
      return !!value;
    }
  }

  return true;
};
