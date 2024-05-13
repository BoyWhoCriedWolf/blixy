import {
  CircleOutlined,
  HandshakeOutlined,
  NoteAltOutlined,
  Search,
} from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import PrimaryTable from "components/table";
import PageHeading from "components/typography/page-heading";

const BackofficeAccountsReceivablePage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <IconButton size="small">
            <Search />
          </IconButton>
        }
      >
        Accounts Receivable: Outstanding items
      </PageHeading>
      <PrimaryTable
        columns={[
          { headerName: "date", field: "date", flex: 1 },
          {
            headerName: "DESCRIPTION",
            field: "description",
            renderCell: (params: GridRenderCellParams) => {
              return (
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>{params.row?.description ?? ""}</Grid>
                  <Grid item>
                    <HandshakeOutlined fontSize="small" />
                  </Grid>
                </Grid>
              );
            },
            flex: 1,
          },

          {
            headerName: "EXPIRATION DATE",
            field: "expiration",
            renderCell: (params: GridRenderCellParams) => {
              return (
                <Grid
                  container
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Grid item>{params?.row?.expiration ?? ""}</Grid>
                  <Grid item>
                    <Grid container alignItems={"center"}>
                      <Grid item>
                        <CircleOutlined fontSize="small" />
                      </Grid>
                      <Grid item>
                        <NoteAltOutlined fontSize="small" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            },
            flex: 1,
          },
        ]}
        data={[
          {
            date: "01-01-2024",
            description: "JV Services & Consulting B.V.",
            number: "",
            open: "",
            expiration: "",
          },
          {
            date: "01-01-2024",
            description: "Management fee 2024-1",
            number: "5086",
            open: "16.250,00",
            expiration: "15-01-2024",
          },
          {
            date: "01-01-2024",
            description: "Management fee 2024-2",
            number: "5089",
            open: "16.250,00",
            expiration: "15-01-2024",
          },
          {
            date: "01-01-2024",
            description: "Management fee 2024-3",
            number: "5087",
            open: "16.250,00",
            expiration: "15-01-2024",
          },
          {
            date: "01-01-2024",
            description: "Management fee 2024-4",
            number: "5088",
            open: "16.250,00",
            expiration: "15-01-2024",
          },
        ]}
        checkboxSelection={true}
      />
    </Paper>
  );
};

export default BackofficeAccountsReceivablePage;
