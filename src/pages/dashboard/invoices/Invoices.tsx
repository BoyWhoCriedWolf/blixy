import {
  Add,
  ArrowUpwardOutlined,
  CheckCircleOutline,
  Layers,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper } from "@mui/material";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import InvoicesFilter from "./InvoicesFilter";

const Invoices = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <Paper
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: (theme) => theme.palette.divider,
          p: 2,
        }}
        elevation={0}
      >
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item lg={4} md={4} sm={4} xs={4} sx={{ display: "flex" }}>
            <SearchBar />
            <InvoicesFilter />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<Add />}
              color="primary"
              size="small"
            >
              create invoice
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Box sx={{ p: 1 }}>
        <PrimaryTable
          columns={[
            { headerName: "Invoice Number", field: "invoice_number" },
            { headerName: "Date", field: "date" },
            { headerName: "Contact", field: "contact" },
            { headerName: "Contact Type", field: "contact_type" },
            { headerName: "Amount", field: "amount" },
            { headerName: "Status", field: "status" },
            { headerName: "Transaction", field: "transaction" },
            { headerName: "Source", field: "source" },
          ]}
          data={[
            {
              invoice_number: 3444,
              date: "23/09/23",
              contact: (
                <div>
                  <Layers
                    sx={{
                      fontSize: 14,
                      mr: 1,
                      color: "white",
                      backgroundColor: "yellow",
                    }}
                  />
                  Snapchat
                </div>
              ),
              contact_type: "Vendor",
              amount: (
                <div>
                  <ArrowUpwardOutlined
                    sx={{ fontSize: 14, mr: 1 }}
                    color="error"
                  />
                  €1576.20
                </div>
              ),
              status: (
                <div>
                  <CheckCircleOutline sx={{ fontSize: 12 }} /> Matched
                </div>
              ),
              transaction: "Ready for Review",
              source: "Uploaded by user",
            },
          ]}
          isAction={true}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
