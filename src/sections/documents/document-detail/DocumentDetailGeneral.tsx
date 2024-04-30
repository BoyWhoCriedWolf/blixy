import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import PrimaryTable from "components/table";
import DocumentDetailContactDetailsForm from "./DocumentDetailContactDetailsForm";
import DocumentDetailExtractedItemsForm from "./DocumentDetailExtractedItemsForm";
import DocumentDetailPaymentInfoForm from "./DocumentDetailPaymentInfoForm";

const DocumentDetailGeneral = () => {
  return (
    <Box>
      {/* Extracted Items */}
      <Box sx={{ mb: 2, pt: 3 }}>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Extracted Items
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <DocumentDetailExtractedItemsForm />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Contact details */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Contact details
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <DocumentDetailContactDetailsForm />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Items */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Items</AccordionSummary>
          <AccordionDetails>
            <Box>
              <PrimaryTable
                columns={[
                  { label: "Item ID", name: "id" },
                  { label: "Description", name: "description" },
                  { label: "HSN/SAC Code", name: "code" },
                  { label: "Quantity", name: "quantity" },
                ]}
                data={[
                  {
                    id: "ABC",
                    description: "Pen",
                    code: "ABCD123",
                    quantity: 100,
                  },
                ]}
                isAction={false}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Total Summary */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Total Summary
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableBody>
                    {[
                      { name: "Subtotal", value: "€9" },
                      { name: "Discount", value: "-€1" },
                      { name: "Adjustments", value: "-€1" },
                      { name: "Total CVAT AMOUNT", value: "+€1" },
                      { name: "Total SVAT AMOUNT", value: "+€1" },
                      { name: "Total IVAT AMOUNT", value: "+€1" },
                      { name: "Total Cess", value: "+€1" },
                      { name: "Grand Total", value: "11" },
                    ].map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 1,
                            borderColor: (theme) => theme.palette.divider,
                          },
                        }}
                      >
                        <TableCell>{row?.name ?? ""}</TableCell>
                        <TableCell>{row?.value ?? ""}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Ledger Entries */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Ledger Entries
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <PrimaryTable
                columns={[
                  { label: "Entry", name: "entry" },
                  { label: "Debit", name: "debit" },
                  { label: "Credit", name: "credit" },
                ]}
                data={[
                  { entry: "", debit: "", credit: "" },
                  { entry: "", debit: "", credit: "" },
                  { entry: "", debit: "", credit: "" },
                ]}
                isAction={false}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Payment Info */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            Payment Info
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <DocumentDetailPaymentInfoForm />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Paper sx={{ mt: 8, p: 1 }}>
        <TextField
          InputProps={{
            endAdornment: <Button variant="contained">Approve</Button>,
          }}
          placeholder="Approve invoice"
          fullWidth
        />
      </Paper>
    </Box>
  );
};

export default DocumentDetailGeneral;
