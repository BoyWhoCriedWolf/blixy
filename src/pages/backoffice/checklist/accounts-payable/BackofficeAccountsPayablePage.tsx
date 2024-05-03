import {
  CircleOutlined,
  KeyboardArrowRightOutlined,
  Note,
  NoteAltOutlined,
  Search,
} from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
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
          {
            headerName: "",
            field: "no",
            renderCell: (params: GridRenderCellParams) => {
              return <KeyboardArrowRightOutlined fontSize="small" />;
            },
          },
          { headerName: "date", field: "date" },
          { headerName: "DESCRIPTION", field: "description" },
          {
            headerName: "",
            field: "note",
            renderCell: (params: GridRenderCellParams) => {
              return <Note fontSize="small" />;
            },
          },
          { headerName: "INVOICE NUMBER", field: "number" },
          { headerName: "OPEN", field: "open" },
          { headerName: "ORIGINAL", field: "original" },
          { headerName: "EXPIRATION DATE", field: "expiration" },
          {
            headerName: "",
            field: "circle",
            renderCell: (params: GridRenderCellParams) => {
              return <CircleOutlined fontSize="small" />;
            },
          },
          {
            headerName: "",
            field: "sign",
            renderCell: (params: GridRenderCellParams) => {
              return <NoteAltOutlined fontSize="small" />;
            },
          },
        ]}
        data={[
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            date: "01-01-2024",
            description: "Notary Van Benthem Cologne",
          },
          {
            no: <KeyboardArrowRightOutlined fontSize="small" />,
            date: "16-02-2024",
            description:
              "Layers Amstelveen, building number 6. file number 404512",
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
