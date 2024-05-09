import { Add, CloseOutlined, Functions } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Fab,
  FormControl,
  MenuItem,
  Paper,
  PaperTypeMap,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import EditForm from "components/edit-form";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { DispatchFunction, FieldType } from "types/ui-types";
import DocumentDetailAddressForm from "./DocumentDetailAddressForm";
import DocumentDetailPaymentForm from "./DocumentDetailPaymentForm";

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
              type: FieldType.DateTime,
            },
            // VAT value
            {
              displayName: "VAT value",
              name: "vat_value",
              type: FieldType.Money,
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
      </FormContainer>

      {/* Billing Rules */}
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          BILLING RULES
        </Typography>

        <Button startIcon={<Add />} color="success">
          Add new invoice line
        </Button>
        <PrimaryTable
          columns={[
            { headerName: "Description", field: "Description", flex: 1 },
            { headerName: "General ledger account", field: "account", flex: 1 },
            { headerName: "Tax code", field: "code", flex: 1 },
            { headerName: "Amount", field: "amount", flex: 1 },
            { headerName: "Inc. VAT", field: "Inc", flex: 1 },
          ]}
          data={[
            {
              Description: (
                <TextField variant="outlined" size="small" fullWidth />
              ),
              account: <SearchBar iconPosition="right" />,
              code: (
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    value=""
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem disabled value="">
                      not liable to VAT
                    </MenuItem>
                  </Select>
                </FormControl>
              ),
              amount: (
                <TextField
                  InputProps={{
                    endAdornment: <Functions fontSize="small" />,
                  }}
                  size="small"
                  fullWidth
                />
              ),
              Inc: (
                <Box>
                  <Checkbox size="small" />
                  <Fab color="primary" size="small">
                    <CloseOutlined sx={{ fontSize: 10 }} />
                  </Fab>
                </Box>
              ),
            },
            { code: "Total incl. VAT:", amount: "0,000" },
            { code: "Invoice amount:", amount: "0,000" },
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

export default DocumentDetailSalesInvoice;
