import { CloseOutlined, Functions, Search } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Fab,
  FormControl,
  Grid,
  Icon,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";

const DocumentDetailSalesInvoice = () => {
  return (
    <Box>
      <Box
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
      </Box>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Customer</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                <SearchBar iconPosition="right" />
              </Grid>
            </Grid>
            <Grid container mb={1}>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Relationship code / KVK</Typography>
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
        <Grid container spacing={1} mb={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>invoice number</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
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
                <FormControl sx={{ width: "40%" }}>
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
        <Grid container spacing={1} mb={1}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Typography mt={1}>invoice date</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9}>
                {/* <TextField variant="outlined" size="small" fullWidth /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={3} md={3} sm={3} xs={3}>
                <Typography mt={1}>VAT value</Typography>
              </Grid>
              <Grid item lg={9} md={9} sm={9} xs={9} sx={{ display: "flex" }}>
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
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <Typography mt={1}>General ledger account</Typography>
            <Typography mt={3}>Subject</Typography>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={9}>
            <TextField
              InputProps={{ endAdornment: <Search /> }}
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
        <Stack direction={"row"} spacing={2}>
          <Icon color="success">add_circle</Icon>
          <Typography mb={1}>Add new invoice line</Typography>
        </Stack>
        <PrimaryTable
          columns={[
            { label: "Description", name: "Description" },
            { label: "General ledger account", name: "account" },
            { label: "Tax code", name: "code" },
            { label: "Amount", name: "amount" },
            { label: "Inc. VAT", name: "Inc" },
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
                <Typography mt={3}>Payment reference</Typography>
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
                <TextField variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={4}>
                <Typography mt={1}>Expiration date</Typography>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={8}>
                {/* datepicker */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default DocumentDetailSalesInvoice;
