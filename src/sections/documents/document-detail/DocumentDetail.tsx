import {
  Box,
  Collapse,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DocumentDetailBankStatement from "./DocumentDetailBankStatement";
import DocumentDetailGeneral from "./DocumentDetailGeneral";
import DocumentDetailPurchaseInvoice from "./DocumentDetailPurchaseInvoice";
import DocumentDetailSalesInvoice from "./DocumentDetailSaleInvoice";
import DocumentDetailStandard from "./DocumentDetailStandard";

const DocumentDetail = () => {
  const [documentType, setDocumentType] = useState("General");

  const handleChangeType = (e: SelectChangeEvent<string>) => {
    setDocumentType(e?.target?.value ?? "");
  };

  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Typography>Document Type</Typography>
        <FormControl sx={{ mt: 1 }} fullWidth>
          <Select
            displayEmpty
            value={documentType}
            inputProps={{ "aria-label": "Without label" }}
            size="small"
            fullWidth
            onChange={handleChangeType}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Standard">Standard</MenuItem>
            <MenuItem value="Purchase Invoice">Purchase Invoice</MenuItem>
            <MenuItem value="Sales Invoice">Sales Invoice</MenuItem>
            <MenuItem value="Bank Statement">Bank Statement</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Collapse in={documentType === "General"}>
          <Box>
            <DocumentDetailGeneral />
          </Box>
        </Collapse>
        <Collapse in={documentType === "Standard"}>
          <Box>
            <DocumentDetailStandard />
          </Box>
        </Collapse>
        <Collapse in={documentType === "Purchase Invoice"}>
          <Box>
            <DocumentDetailPurchaseInvoice />
          </Box>
        </Collapse>
        <Collapse in={documentType === "Sales Invoice"}>
          <Box>
            <DocumentDetailSalesInvoice />
          </Box>
        </Collapse>
        <Collapse in={documentType === "Bank Statement"}>
          <Box>
            <DocumentDetailBankStatement />
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default DocumentDetail;
