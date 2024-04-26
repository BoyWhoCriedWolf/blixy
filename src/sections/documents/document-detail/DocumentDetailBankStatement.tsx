import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import React from "react";

const DocumentDetailBankStatement = () => {
  return (
    <Box>
      <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <Box
            sx={{
              p: 2,
              mb: 1,
              backgroundColor: (theme) => theme.palette.warning.main,
            }}
          >
            <Typography fontSize={24} fontWeight={600}>
              Copy: 1
            </Typography>
            <Typography fontWeight={500}>Organizer: Tax</Typography>
          </Box>
          <Paper sx={{ p: 2, mb: 1 }}>
            <PrimaryTable
              columns={[
                { label: "Bank account", name: "account" },
                { label: "Copy", name: "copy" },
                { label: "Date", name: "date" },
                { label: "Previous balance", name: "previous" },
                { label: "New balance", name: "new" },
              ]}
              data={[
                {
                  account: <SearchBar iconPosition="right" />,
                  copy: 1,
                  date: "",
                  previous: (
                    <TextField variant="outlined" size="small" fullWidth />
                  ),
                  new: <TextField variant="outlined" size="small" fullWidth />,
                },
              ]}
            />
          </Paper>
          <Paper sx={{ p: 2, mb: 1 }}>
            <PrimaryTable
              columns={[
                { label: "Type", name: "type" },
                { label: "Trans.date", name: "date" },
                { label: "Contra account", name: "account" },
                { label: "Contra account name", name: "name" },
                { label: "Bee", name: "Bee" },
                { label: "Af", name: "Af" },
              ]}
              data={[
                {
                  type: (
                    <FormControl sx={{ width: "100%" }}>
                      <Select
                        displayEmpty
                        value=""
                        inputProps={{ "aria-label": "Without label" }}
                        size="small"
                      >
                        <MenuItem disabled value="">Standard</MenuItem>
                      </Select>
                    </FormControl>
                  ),
                  date: "",
                  account: (
                    <TextField variant="outlined" size="small" fullWidth />
                  ),
                  name: <TextField variant="outlined" size="small" fullWidth />,
                  Bee: <TextField variant="outlined" size="small" fullWidth />,
                  Af: <TextField variant="outlined" size="small" fullWidth />,
                },
              ]}
            />
            <Typography fontWeight={500} my={1}>Description</Typography>
            <Box sx={{ display: "flex" }}>
              <TextField variant="outlined" size="small" fullWidth />
              <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                Save
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default DocumentDetailBankStatement;
