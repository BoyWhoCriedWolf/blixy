import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import taxService from "services/tax.service";
import { BTW_TYPES } from "services/types/btw.type.types";
import { Document } from "services/types/document.types";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { Tax } from "services/types/tax.types";
import { DispatchFunction, FieldType, GeneralOption } from "types/ui-types";
import { joinStrings } from "utils/string-utils";

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
          name: "tax_id",
          type: FieldType.Choice,
          getOptions: async () => {
            const ret = await taxService.gets();
            if (ret.success) {
              return ret.data ?? [];
            }
            return [];
          },
          getOptionLabel: (option: Tax) => option?.description ?? "",
          getOptionValue: (option: Tax) => option?.id ?? "",
          joinedFieldName: "tax",
          defaultOptionLabel: data?.tax?.description ?? "",
        },
        // Document date
        {
          displayName: "Document date",
          name: "document_date",
          type: FieldType.DateOnly,
        },
        // Amount
        {
          displayName: "Amount",
          name: "amount",
          type: FieldType.Money,
        },
        // VAT Amount
        {
          displayName: "VAT Amount",
          name: "vat_amount",
          secondaryName: "vat_amount_currency",
          type: FieldType.Money,
        },
        // BTW Type
        {
          displayName: "BTW Type",
          name: "btw_type",
          type: FieldType.Choice,
          options: BTW_TYPES,
          getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
          getOptionValue: (option?: GeneralOption) => option?.value ?? "",
        },
        // General ledger account
        {
          displayName: "General ledger account",
          name: "general_ledger_account_id",
          type: FieldType.Choice,
          getOptions: async () => {
            const ret = await generalLedgerAccountService.gets();
            return ret.data ?? [];
          },
          getOptionLabel: (option?: GeneralLedgerAccount) =>
            joinStrings(" ", option?.code, option?.description),
          getOptionValue: (option?: GeneralLedgerAccount) => option?.id ?? "",
          joinedFieldName: "general_ledger_account",
          defaultOptionLabel: joinStrings(
            " ",
            data?.general_ledger_account?.code,
            data?.general_ledger_account?.description
          ),
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
