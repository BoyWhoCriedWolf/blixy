import EditForm from "components/edit-form";
import { FieldType } from "types/ui-types";

const DocumentDetailInvoiceForm = () => {
  return (
    <EditForm
      lg={6}
      md={6}
      sm={12}
      xs={12}
      fields={[
        // Reference
        {
          displayName: "Reference",
          name: "reference",
          type: FieldType.Text,
        },
        // Amount
        {
          displayName: "Amount",
          name: "amount",
          type: FieldType.Money,
        },
        // Document date
        {
          displayName: "Document date",
          name: "document_date",
          type: FieldType.DateTime,
        },
        // General ledger account
        {
          displayName: "General ledger account",
          name: "general_ledger_account",
          type: FieldType.Choice,
          options: [
            "Account 1",
            "Account 2",
            "Account 3",
            "Account 4",
            "Account 5",
          ],
        },
        // Subject
        {
          displayName: "Subject",
          name: "subject",
          type: FieldType.Text,
        },
      ]}
    />
  );
};

export default DocumentDetailInvoiceForm;
