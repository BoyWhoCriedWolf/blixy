import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { PAYMENT_METHODS } from "services/types/payment.method.types";
import { DispatchFunction, FieldType, GeneralOption } from "types/ui-types";

const DocumentDetailPaymentForm: FC<
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
        // Payment method
        {
          displayName: "Payment method",
          name: "transaction_id",
          type: FieldType.Choice,
          options: PAYMENT_METHODS,
          getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
          getOptionValue: (option?: GeneralOption) => option?.value ?? "",
        },
        // Bank account
        {
          displayName: "Bank account",
          name: "account",
          type: FieldType.Choice,
          options: ["Account 1", "Account 2", "Account 3", "Account 4"],
        },
        // Pay For
        {
          displayName: "Pay For",
          name: "pay_for",
          type: FieldType.Text,
        },
        // Payment reference
        {
          displayName: "Payment reference",
          name: "payment_reference",
          type: FieldType.Text,
        },
      ]}
    />
  );
};

export default DocumentDetailPaymentForm;
