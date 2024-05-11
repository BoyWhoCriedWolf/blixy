import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import {
  PAYMENT_METHODS,
  PaymentMethod,
} from "services/types/payment.method.types";
import { DispatchFunction, FieldType, GeneralOption } from "types/ui-types";

const DocumentDetailPaymentForm: FC<
  PropsWithChildren<{ data?: Document; onChange?: DispatchFunction<Document> }>
> = ({ data = {} as Document, onChange = () => null }) => {
  return (
    <EditForm<Document>
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

        // bank transfer
        // Bank account
        {
          displayName: "Bank account",
          name: "payment_account",
          type: FieldType.Choice,
          options: [],
          isHide: (fd: Document) => {
            console.log(fd);
            return !(fd.payment_method === PaymentMethod.BankTransfer);
          },
        },
        // Bic code
        {
          displayName: "Bic code",
          name: "payment_bic_code",
          type: FieldType.Text,
          isHide: (fd: Document) =>
            !(fd.payment_method === PaymentMethod.BankTransfer),
        },
        // Payment reference
        {
          displayName: "Payment reference",
          name: "payment_reference",
          type: FieldType.Text,
          isHide: (fd: Document) =>
            !(fd.payment_method === PaymentMethod.BankTransfer),
        },
        // Payment term time
        {
          displayName: "Payment term time",
          name: "payment_term_time",
          placeholder: "14 days",
          type: FieldType.Text,
          isHide: (fd: Document) =>
            !(fd.payment_method === PaymentMethod.BankTransfer),
        },

        // Collection
        // Payment reference
        {
          displayName: "Payment reference",
          name: "payment_reference",
          type: FieldType.Text,
          isHide: (fd: Document) =>
            !(fd.payment_method === PaymentMethod.Collection),
        },

        // Pin
        // Payment reference
        // {
        //   displayName: "Payment reference",
        //   name: "payment_reference",
        //   type: FieldType.Text,
        //   isHide: (fd: Document) => !(fd.payment_method === PaymentMethod.Pin),
        // },
      ]}
    />
  );
};

export default DocumentDetailPaymentForm;
