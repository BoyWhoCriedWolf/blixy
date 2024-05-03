import {
  CircleOutlined,
  Note,
  NoteAltOutlined,
  Search,
} from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import PrimaryTable from "components/table";
import PageHeading from "components/typography/page-heading";

const BackofficeAccountsPayablePage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <IconButton size="small">
            <Search />
          </IconButton>
        }
      >
        Accounts Payable: Outstanding items
      </PageHeading>
      <PrimaryTable
        columns={[
          { headerName: "date", field: "date" },
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
                    <Note fontSize="small" />
                  </Grid>
                </Grid>
              );
            },
            width: 300,
          },
          { headerName: "INVOICE NUMBER", field: "number" },
          { headerName: "OPEN", field: "open" },
          { headerName: "ORIGINAL", field: "original" },
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
            width: 300,
          },
        ]}
        data={[
          {
            date: "01-01-2024",
            description: "test accounts payable 0",
          },
          {
            date: "16-02-2024",
            description: "test accounts payable 1",
            open: "-17.616,06",
          },
          {
            description: "Balance",
            open: "-17.616,06",
            expiration: "15-01-2024",
          },
        ]}
        checkboxSelection={true}
      />
    </Paper>
  );
};

export default BackofficeAccountsPayablePage;
