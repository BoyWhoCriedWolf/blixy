import { AutoAwesome, MicOutlined, PaidOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import PrimaryTable from "components/table";

const DocumentDetail = () => {
  return (
    <Box>
      {/* ======= extracted item ========= */}
      <Box sx={{ mb: 2, pt: 3 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Extracted Items
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box sx={{ display: "flex", p: 2 }}>
                <Typography
                  color={(theme) => theme.palette.warning.main}
                  sx={{ mr: 1 }}
                >
                  <AutoAwesome />
                </Typography>
                <Typography color={(theme) => theme.palette.warning.main}>
                  72% Confidence
                </Typography>
              </Box>
              <Typography sx={{ px: 3 }}>
                Found user in narration - This is dummy text. This text can be
                two line long giving a lot of space for reasoning.
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* ======== select ============== */}
      <Box>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography>Contact</Typography>
              <FormControl sx={{ width: "100%", mt: 1 }}>
                <Select
                  displayEmpty
                  value=""
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  fullWidth
                >
                  <MenuItem disabled value="">
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <PaidOutlined sx={{ fontSize: 16, mt: 0.5, mr: 1 }} />
                      </Typography>
                      <em>Snapchat</em>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography sx={{ mt: 1 }}>Total</Typography>
              <TextField
                placeholder="€1576.20"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Typography sx={{ mt: 1 }}>TDS</Typography>
              <TextField
                placeholder="€1576.20"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Typography sx={{ mt: 1 }}>Linked Statement</Typography>
              <TextField
                placeholder="VIN/SNAP INC/...0923455"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box>
              <Typography>General Ledger Account</Typography>
              <FormControl sx={{ width: "100%", mt: 1 }}>
                <Select
                  displayEmpty
                  value=""
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  fullWidth
                >
                  <MenuItem disabled value="">
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <MicOutlined sx={{ fontSize: 16, mt: 0.5, mr: 1 }} />
                      </Typography>
                      <em>Ad Expense</em>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <Typography sx={{ mt: 1 }}>VAT AMOUNT</Typography>
              <TextField
                placeholder="€234.90"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Typography sx={{ mt: 1 }}>Item Count</Typography>
              <TextField
                placeholder="1"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* =========Contact detail start======== */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Contact details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Box>
                        <Typography>Contact Type</Typography>
                        <FormControl sx={{ width: "100%", mt: 1 }}>
                          <Select
                            displayEmpty
                            value=""
                            inputProps={{ "aria-label": "Without label" }}
                            size="small"
                            fullWidth
                          >
                            <MenuItem disabled value="">
                              <em>Lorem</em>
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                    <Box>
                      <Typography sx={{ mt: 1 }}>Address</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>State Code</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>Phone Number</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                      <Typography>Name</Typography>
                      <FormControl sx={{ width: "100%", mt: 1 }}>
                        <Select
                          displayEmpty
                          value=""
                          inputProps={{ "aria-label": "Without label" }}
                          size="small"
                          fullWidth
                        >
                          <MenuItem disabled value="">
                            <em>Lorem</em>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box>
                      <Typography sx={{ mt: 1 }}>VAT AMOUNT</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>Email</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Box>
                      <Typography sx={{ mt: 1 }}>Billing Name</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>Billing VAT AMOUNT</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Box>
                      <Typography sx={{ mt: 1 }}>Billing Address</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>Billing State Code</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Box>
                      <Typography sx={{ mt: 1 }}>Shipping Name</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>
                        shipping VAT AMOUNT
                      </Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                    <Box>
                      <Typography sx={{ mt: 1 }}>shipping Address</Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                      <Typography sx={{ mt: 1 }}>
                        shipping State Code
                      </Typography>
                      <TextField
                        placeholder="Lorem"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* ==========Items start========== */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Items
            </Typography>
          </AccordionSummary>
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
      {/* ================Total summary============== */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Total Summary
            </Typography>
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
      {/* ============= Ledger Entries =========== */}
      <Box sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Ledger Entries
            </Typography>
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
      {/* ===========Payment Info =============== */}
      <Box sx={{ mt: 2, mb: 8 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1d-content">
            <Typography fontSize={20} fontWeight={600}>
              Payment Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{ mt: 1 }}>Transaction ID</Typography>
                <TextField
                  placeholder="Lorem"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <Typography sx={{ mt: 1 }}>Bank Name</Typography>
                <TextField
                  placeholder="Lorem"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography sx={{ mt: 1 }}>Account Number</Typography>
                <TextField
                  placeholder="Lorem"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
      <TextField
        InputProps={{
          endAdornment: <Button variant="contained">Approve</Button>,
        }}
        placeholder="Approve invoice"
        fullWidth
      />
    </Box>
  );
};

export default DocumentDetail;
