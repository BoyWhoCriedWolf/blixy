/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, InputLabel } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { DispatchFunction, FieldFormat, StaticField } from "types/ui-types";
import EditFormControlCheckbox from "./EditFormControlCheckbox";
import EditFormControlChoice from "./EditFormControlChoice";
import EditFormControlDate from "./EditFormControlDate";
import EditFormControlDateTime from "./EditFormControlDateTime";
import EditFormControlDropdownYesNo from "./EditFormControlDropdownYesNo";
import EditFormControlMoney from "./EditFormControlMoney";
import EditFormControlMultiChoice from "./EditFormControlMultiChoice";
import EditFormControlPassword from "./EditFormControlPassword";
import EditFormControlPhone from "./EditFormControlPhone";
import EditFormControlRadio from "./EditFormControlRadio";
import EditFormControlSwitch from "./EditFormControlSwitch";
import EditFormControlText from "./EditFormControlText";
import EditFormControlTime from "./EditFormControlTime";

const EditFormControl: FC<
  PropsWithChildren<{
    data?: any;
    onChangeData?: DispatchFunction<any>;
    field?: Partial<StaticField>;
    readOnly?: boolean;
    value?: string | any;
    onChange?: DispatchFunction<any>;
    onClick?: (value?: Partial<StaticField>) => void;
    onBlur?: () => void;
    isLabel?: boolean;
    isValid?: boolean;
  }>
> = ({
  data,
  onChangeData = () => null,
  field = {} as StaticField,
  readOnly = false,
  value = "",
  onChange = () => null,
  onClick = () => null,
  onBlur = () => null,
  isLabel = true,
  isValid = true,
}) => {
  return field.type === FieldFormat.Text ||
    field.type === FieldFormat.Decimal ||
    field.type === FieldFormat.Integer ||
    field.type === FieldFormat.MultiLineText ? (
    <EditFormControlText
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Phone ? (
    <EditFormControlPhone
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Password ? (
    <EditFormControlPassword
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Money ? (
    <EditFormControlMoney
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.DateOnly ? (
    <EditFormControlDate
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.DateTime ? (
    <EditFormControlDateTime
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.TimeOnly ? (
    <EditFormControlTime
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Choice ? (
    <EditFormControlChoice
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
      defaultOptionLabel={data?.[field?.optionLabelField ?? ""] ?? ""}
    />
  ) : field.type === FieldFormat.MultiSelectChoice ? (
    <EditFormControlMultiChoice
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Radio ? (
    <EditFormControlRadio
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.TwoChoices ? (
    <EditFormControlSwitch
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.DropDown ? (
    <EditFormControlDropdownYesNo
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Checkbox ? (
    <EditFormControlCheckbox
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Toggle ? (
    <EditFormControlSwitch
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  ) : field.type === FieldFormat.Custom ? (
    <div className="w-full" onClick={() => onClick(field)}>
      {field?.isLabel ?? isLabel ? (
        <InputLabel>{field.displayName}</InputLabel>
      ) : null}
      <Box className="p-2">
        {field?.renderF
          ? field?.renderF(data, onChangeData)
          : field?.render
          ? field?.render
          : null}
      </Box>
    </div>
  ) : (
    <EditFormControlText
      field={field}
      readOnly={readOnly || field.readOnly}
      value={value}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      isLabel={isLabel}
      isValid={isValid}
    />
  );
};

export default EditFormControl;
