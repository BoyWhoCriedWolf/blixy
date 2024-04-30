import EditForm from "components/edit-form";
import { FieldType } from "types/ui-types";

const DocumentDetailPaymentInfoForm = () => {
  return (
    <EditForm
      lg={6}
      md={6}
      sm={12}
      xs={12}
      fields={[
        // Transaction ID
        {
          displayName: "Transaction ID",
          name: "transaction_id",
          type: FieldType.Text,
        },
        // Account Number
        {
          displayName: "Account Number",
          name: "account_number",
          type: FieldType.Text,
        },
        // Bank Name
        {
          displayName: "Bank Name",
          name: "bank_name",
          type: FieldType.Text,
        },
      ]}
    />
  );
};

export default DocumentDetailPaymentInfoForm;
