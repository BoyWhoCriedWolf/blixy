import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowBusinessOperationsForm = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
    readOnly?: boolean;
  }
>(({ data, onChange, readOnly }, ref) => {
  return (
    <EditForm
      ref={ref}
      data={data}
      onChange={onChange}
      fields={[
        {
          displayName: "Operational Start Date",
          name: "operation_start_date",
          type: FieldType.DateOnly,
        },
        {
          displayName: "Fiscal Year End",
          name: "operation_fiscal_end_year",
          type: FieldType.DateOnly,
        },

        {
          displayName: "Accounting Method",
          name: "operation_accounting_method",
          type: FieldType.Choice,
          options: ["Cash basis", "Accrual basis"],
        },
        {
          displayName: "Business Activities",
          name: "operation_business_activities",
          type: FieldType.MultiLineText,
        },
      ]}
      readOnly={readOnly}
    />
  );
});

export default BusinessRegFlowBusinessOperationsForm;
