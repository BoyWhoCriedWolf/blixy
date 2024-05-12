import { Box, Paper, PaperTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { Document } from "services/types/document.types";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { DispatchFunction, FieldType } from "types/ui-types";
import DocumentDetailAddressForm from "./DocumentDetailAddressForm";
import DocumentDetailPaymentForm from "./DocumentDetailPaymentForm";
import BillingRulesList from "./billing-rules/list";

const DocumentDetailSalesInvoice: FC<
  PropsWithChildren<{
    data?: Document;
    onChange?: DispatchFunction<Document>;
    paperContainer?: boolean;
  }>
> = ({
  data = {} as Document,
  onChange = () => null,
  paperContainer = true,
}) => {
  const FormContainer: OverridableComponent<PaperTypeMap<{}, "div">> =
    paperContainer ? Paper : Box;

  return (
    <Box>
      <FormContainer
        sx={{
          p: 2,
          mb: 1,
          backgroundColor: (theme) => theme.palette.info.main,
        }}
      >
        <Typography fontSize={24} fontWeight={600}>
          Invoice to
        </Typography>
        <Typography fontWeight={500}>Organizer: Tax</Typography>
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <DocumentDetailAddressForm data={data} onChange={onChange} />
      </FormContainer>

      {/* Invoice */}
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          INVOICE
        </Typography>

        <EditForm
          lg={6}
          md={6}
          sm={12}
          xs={12}
          data={data}
          onChange={onChange}
          fields={[
            // Invoice Number
            {
              displayName: "Invoice Number",
              name: "invoice_number",
              type: FieldType.Text,
            },
            // Amount
            {
              displayName: "Amount",
              name: "amount",
              type: FieldType.Money,
            },
            // Invoice date
            {
              displayName: "Invoice date",
              name: "invoice_date",
              type: FieldType.DateOnly,
            },
            // VAT amount
            {
              displayName: "VAT amount",
              name: "vat_amount",
              secondaryName: "vat_amount_currency",
              type: FieldType.Money,
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
              getOptionValue: (option?: GeneralLedgerAccount) =>
                option?.id ?? "",
            },
            // Subject
            {
              displayName: "Subject",
              name: "subject",
              type: FieldType.Text,
            },
          ]}
        />
      </FormContainer>

      {/* Billing Rules */}
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          BILLING RULES
        </Typography>
        <BillingRulesList document={data} />
      </FormContainer>

      {/* Payment */}
      <FormContainer sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={1}>
          PAYMENT
        </Typography>
        <DocumentDetailPaymentForm data={data} onChange={onChange} />
      </FormContainer>
    </Box>
  );
};

export default DocumentDetailSalesInvoice;
