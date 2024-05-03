import {
  CircleOutlined,
  HandshakeOutlined,
  KeyboardArrowRightOutlined,
  NoteAltOutlined,
  Search,
} from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import PrimaryTable from "components/table";
import React from "react";

const BackofficeAccountsReceivablePage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography color="primary" fontSize={24} fontWeight={600}>
          Debtors: Outstanding items
        </Typography>
        <IconButton size="small">
          <Search />
        </IconButton>
      </Box>
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
            field: "hand",
            renderCell: (params: GridRenderCellParams) => {
              return <HandshakeOutlined fontSize="small" />;
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
            date: "01-01-2024",
            description: "JV Services & Consulting B.V.",
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
