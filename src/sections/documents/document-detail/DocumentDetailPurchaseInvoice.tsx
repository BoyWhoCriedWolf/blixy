import { Add, Functions } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Paper,
  PaperTypeMap,
  TextField,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { DispatchFunction } from "types/ui-types";
import DocumentDetailAddressForm from "./DocumentDetailAddressForm";
import DocumentDetailInvoiceForm from "./DocumentDetailInvoiceForm";
import DocumentDetailPaymentForm from "./DocumentDetailPaymentForm";

const DocumentDetailPurchaseInvoice: FC<
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
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <Alert title="Important" sx={{ mb: 1 }} color="warning">
          For the automatic recognition and processing of invoices, it is
          important that the VAT, Chamber of Commerce number and website, if
          stated on the invoice, are included below.
        </Alert>
        <DocumentDetailAddressForm />
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          INVOICE
        </Typography>

        <DocumentDetailInvoiceForm data={data} onChange={onChange} />
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          BILLING RULES
        </Typography>
        <Button startIcon={<Add />} sx={{ mb: 1 }}>
          Add new invoice line
        </Button>
        <PrimaryTable
          columns={[
            { headerName: "Description", field: "Description" },
            { headerName: "General ledger account", field: "account" },
            { headerName: "Amount incl. VAT", field: "amount" },
          ]}
          data={[
            {
              Description: (
                <TextField variant="outlined" size="small" fullWidth />
              ),
              account: <SearchBar iconPosition="right" />,
              amount: (
                <TextField
                  InputProps={{
                    endAdornment: <Functions fontSize="small" />,
                  }}
                  size="small"
                  fullWidth
                />
              ),
            },
            { account: "Total incl. VAT", amount: "0,000" },
            { account: "Invoice amount", amount: "0,000" },
          ]}
        />
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

export default DocumentDetailPurchaseInvoice;
