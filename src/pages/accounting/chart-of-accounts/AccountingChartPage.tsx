import { Add, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import React from "react";
import { useNavigate } from "react-router-dom";

const AccountingChartPage = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2, flexGrow: 1 }}>
      <Box sx={{ display: "flex" }}>
        <Typography fontSize={28} fontWeight={600} mb={4} mr={4}>
          General ledger accounts
        </Typography>
        <Stack sx={{ display: "flex", flexDirection: "row", cursor: "pointer" }} onClick={() => navigate('/accounting/chart/new')}>
          <Box
            sx={{
              width: 20,
              height: 20,
              border: "1px solid",
              borderColor: (theme) => theme.palette.error.main,
              borderRadius: "50%",
              mr: 1,
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Add color="error" sx={{ fontSize: 16 }} />
          </Box>
          <Typography color={"error"} mt={1}>New general ledger account</Typography>
        </Stack>
      </Box>
      <Paper sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            px: 2,
          }}
        >
          <SearchBar iconPosition="left" />
          <ButtonGroup
            disableElevation
            variant="outlined"
            aria-label="Disabled button group"
          >
            <Button>Active</Button>
            <Button>Inactive</Button>
          </ButtonGroup>
        </Box>
        <PrimaryTable
          columns={[
            {
              headerName: "",
              field: "down",
              renderCell: (params: GridRenderCellParams) => (
                <KeyboardArrowDown fontSize="small" />
              ),
            },
            { headerName: "Code", field: "code" },
            { headerName: "Description", field: "description" },
            { headerName: "Function", field: "function" },
          ]}
          data={[
            {
              code: 1,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 2,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 3,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 4,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 5,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 6,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 7,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 8,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 9,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 10,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 11,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
          ]}
        />
      </Paper>
    </Box>
  );
};

export default AccountingChartPage;
