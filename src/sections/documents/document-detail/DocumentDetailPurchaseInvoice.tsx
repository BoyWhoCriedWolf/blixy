import { Alert, Box, Paper, PaperTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { DispatchFunction } from "types/ui-types";
import { v4 as uuidv4 } from "uuid";
import DocumentDetailAddressForm from "./DocumentDetailAddressForm";
import DocumentDetailInvoiceForm from "./DocumentDetailInvoiceForm";
import DocumentDetailPaymentForm from "./DocumentDetailPaymentForm";
import BillingRulesList from "./billing-rules/list";

const DocumentDetailPurchaseInvoice: FC<
  PropsWithChildren<{
    data?: Document;
    onChange?: DispatchFunction<Document>;
    paperContainer?: boolean;
    readOnly?: boolean;
  }>
> = ({
  data = {} as Document,
  onChange = () => null,
  paperContainer = true,
  readOnly = false,
}) => {
  const FormContainer: OverridableComponent<PaperTypeMap<{}, "div">> =
    paperContainer ? Paper : Box;

  return (
    <Box>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <Alert title="Important" sx={{ mb: 1 }} color="warning">
          For the automatic recognition and processing of invoices, it is
          important that the VAT, Chamber of Commerce number and website, if
          stated on the invoice, are included below.
        </Alert>
        <DocumentDetailAddressForm
          data={data}
          onChange={onChange}
          readOnly={readOnly}
        />
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          INVOICE
        </Typography>

        <DocumentDetailInvoiceForm
          data={data}
          onChange={onChange}
          readOnly={readOnly}
        />
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          BILLING RULES
        </Typography>
        <BillingRulesList
          document={data}
          readOnly={readOnly}
          preData={
            data.general_ledger_account_id
              ? [
                  {
                    id: uuidv4(),
                    general_ledger_account_id: data.general_ledger_account_id,
                    amount_excl_vat:
                      (data.amount ?? 0) - (data.vat_amount ?? 0),
                  },
                ]
              : undefined
          }
        />
      </FormContainer>

      {/* Payment */}
      <FormContainer sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={1}>
          PAYMENT
        </Typography>
        <DocumentDetailPaymentForm
          data={data}
          onChange={onChange}
          readOnly={readOnly}
        />
      </FormContainer>
    </Box>
  );
};

export default DocumentDetailPurchaseInvoice;
