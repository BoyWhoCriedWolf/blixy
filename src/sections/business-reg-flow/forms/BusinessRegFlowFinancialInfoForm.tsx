import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";

const BusinessRegFlowFinancialInfoForm = forwardRef<
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
        { displayName: "Bank Account Name", name: "bank_account_name" },
        { displayName: "Bank Account Number", name: "bank_account_number" },
        { displayName: "Bank Address", name: "bank_address" },
        // {
        //   displayName: "Initial Capital",
        //   name: "bank_initial_capital",
        //   type: FieldType.Money,
        // },
        // { displayName: "Funding Sources", name: "bank_funding_sources" },
      ]}
      readOnly={readOnly}
    />
  );
});

export default BusinessRegFlowFinancialInfoForm;
