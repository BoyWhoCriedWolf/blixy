import { Add, Functions } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";

const DocumentDetailPurchaseInvoice = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <Box sx={{ display: "flex", mb: 1 }}>
          <Typography mr={1} fontWeight={500}>
            Important:
          </Typography>
          <Typography>
            For the automatic recognition and processing of invoices, it is
            important that the VAT, Chamber of Commerce number and website, if
            stated on the invoice, are included below.
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Supplier</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <SearchBar iconPosition="right" />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Chamber of Commerce / Lev.code</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>VAT-number</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Website</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Address</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={3}>
              <Grid item lg={4} md={4} sm={4} xs={4}></Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Zipcode city</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <TextField variant="outlined" size="small" sx={{ width: 80 }} />
                <TextField variant="outlined" size="small" />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Country</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    value=""
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem disabled value=""></MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          INVOICE
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Typography mt={1}>Reference</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9}>
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Typography mt={1}>Amount</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9} sx={{ display: "flex" }}>
                <FormControl sx={{ width: "30%" }}>
                  <Select
                    displayEmpty
                    value=""
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem disabled value="">
                      EUR
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  InputProps={{
                    endAdornment: <Functions fontSize="small" />,
                  }}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography>Document date</Typography>
          {/* <DatePicker /> */}
        </Box>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>General ledger account</Typography>
            <Typography mt={3}>Subject</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 1 }}
            />
            <TextField variant="outlined" size="small" fullWidth />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          BILLING RULES
        </Typography>
        <Typography mb={1}>
          <Add sx={{ fontSize: 14 }} /> Add new invoice line
        </Typography>
        <PrimaryTable
          columns={[
            { label: "Description", name: "Description" },
            { label: "General ledger account", name: "account" },
            { label: "Amount incl. VAT", name: "amount" },
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
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={1}>
          PAYMENT
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Payment method</Typography>
                <Typography mt={3}>Pay For</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <FormControl sx={{ width: "100%", mb: 1 }}>
                  <Select
                    displayEmpty
                    value=""
                    inputProps={{ "aria-label": "Without label" }}
                    size="small"
                  >
                    <MenuItem disabled value="">
                      Transfer
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ mb: 1, width: "30%" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Bank account</Typography>
                <Typography mt={3}>Payment reference</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <SearchBar iconPosition="right" />
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  sx={{ mt: 1 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default DocumentDetailPurchaseInvoice;
