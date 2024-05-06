import PrimaryTable from "components/table";
import { Box, Button, Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import SearchBar from "components/search-bar";
import { Add } from "@mui/icons-material";

const ContactsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              startIcon={<Add />}
              variant="outlined"
              color="primary"
              sx={{ mr: 2 }}
            >
              New
            </Button>
            <SearchBar iconPosition="left" />
          </Box>
        }
      >
        Suppliers
      </PageHeading>

      <PrimaryTable
        columns={[
          { headerName: "Code", field: "code", align: "center" },
          { headerName: "Name", field: "name", flex: 1 },
          { headerName: "E-mail", field: "email", flex: 1 },
          { headerName: "Telephone", field: "telephone", flex: 1 },
          { headerName: "Place", field: "place", flex: 1 },
        ]}
        data={[
          {
            code: 1,
            name: "NIKE Retail",
            place: "HILVERSUM",
          },
          {
            code: 2,
            name: "Sole Brothers Gmbh",
            place: "Koln",
          },
          {
            code: 3,
            name: "Footer Locker Netherlands B.V.",
            place: "Vianen",
          },
          {
            code: 4,
            name: "StockX LLC",
            place: "Detroit",
          },
          {
            code: 5,
            name: "AUCTANE S.L.U",
            place: "Madrid",
          },
        ]}
        checkboxSelection={true}
      />
    </Paper>
  );
};

export default ContactsPage;
