import { KeyboardArrowRightOutlined, Search } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
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
          {
            headerName: "",
            field: "no",
            renderCell: (params: GridRenderCellParams) => {
              return <KeyboardArrowRightOutlined fontSize="small" />;
            },
          },
          { headerName: "Date Removed", field: "date" },
          { headerName: "By", field: "by" },
          { headerName: "Personal that removed", field: "personal" },
          { headerName: "Type", field: "type" },
          { headerName: "Description", field: "description" },
          { headerName: "File name", field: "file" },
          { headerName: "Status", field: "status" },
          { headerName: "Reason", field: "reason" },
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
      />
    </Paper>
  );
};

export default ArchiveDeletedDocumentsPage;
