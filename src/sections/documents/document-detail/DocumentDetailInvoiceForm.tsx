import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { Document } from "services/types/document.types";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const DocumentDetailInvoiceForm: FC<
  PropsWithChildren<{ data?: Document; onChange?: DispatchFunction<Document> }>
> = ({ data = {} as Document, onChange = () => null }) => {
  return (
    <EditForm
      lg={6}
      md={6}
      sm={12}
      xs={12}
      data={data}
      onChange={onChange}
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
          getOptions: async () => {
            const ret = await generalLedgerAccountService.gets();
            return ret.data ?? [];
          },
          getOptionLabel: (option?: GeneralLedgerAccount) =>
            option?.description ?? "",
          getOptionValue: (option?: GeneralLedgerAccount) => option?.id ?? "",
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
