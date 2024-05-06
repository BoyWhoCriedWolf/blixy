import { Search } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import PrimaryTable from "components/table";
import React from "react";
const ArchiveDeletedDocumentsPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Typography color="primary" fontSize={24} fontWeight={600}>
          Deleted documents
        </Typography>
        <IconButton size="small">
          <Search />
        </IconButton>
      </Box>
      <PrimaryTable
        columns={[
          { headerName: "Date Removed", field: "date", flex: 1 },
          { headerName: "By", field: "by", flex: 1 },
          { headerName: "Personal that removed", field: "personal", flex: 1 },
          { headerName: "Type", field: "type", flex: 1 },
          { headerName: "Description", field: "description", flex: 1 },
          { headerName: "File name", field: "file", flex: 1 },
          { headerName: "Status", field: "status", flex: 1 },
          { headerName: "Reason", field: "reason", flex: 1 },
        ]}
        data={[
          {
            date: "29-04-2024 16:11",
            by: "yuki",
            personal: "Dion Florack",
            type: "Year-end correction",
            description: "Transfer of undistributed results",
            file: "Auto Generated Journal.htm",
          },
          {
            date: "25-04-2024 13:11",
            by: "yuki",
            personal: "Tom de Hoop",
            type: "Purchase invoice",
            description: "(no subject)",
            file: "310225.pdf",
            status: "Done",
            reason: "Duplicate",
          },
          {
            date: "25-04-2024 13:11",
            by: "yuki",
            personal: "Tom de Hoop",
            type: "Purchase invoice",
            description: "(no subject)",
            file: "310225.pdf",
            status: "Done",
            reason: "Duplicate",
          },
          {
            date: "25-04-2024 13:11",
            by: "yuki",
            personal: "Tom de Hoop",
            type: "Purchase invoice",
            description: "(no subject)",
            file: "310225.pdf",
            status: "Done",
            reason: "Duplicate",
          },
        ]}
        checkboxSelection={true}
      />
    </Paper>
  );
};

export default ArchiveDeletedDocumentsPage;
