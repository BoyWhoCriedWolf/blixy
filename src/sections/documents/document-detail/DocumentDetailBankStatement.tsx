import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";

const DocumentDetailBankStatement = () => {
  return (
    <Box>
      <Paper
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
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <PrimaryTable
          columns={[
            { headerName: "Bank account", field: "account" },
            { headerName: "Copy", field: "copy" },
            { headerName: "Date", field: "date" },
            { headerName: "Previous balance", field: "previous" },
            { headerName: "New balance", field: "new" },
          ]}
          data={[
            {
              account: <SearchBar iconPosition="right" />,
              copy: 1,
              date: "",
              previous: <TextField variant="outlined" size="small" fullWidth />,
              new: <TextField variant="outlined" size="small" fullWidth />,
            },
          ]}
        />
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <PrimaryTable
          columns={[
            { headerName: "Type", field: "type" },
            { headerName: "Trans.date", field: "date" },
            { headerName: "Contra account", field: "account" },
            { headerName: "Contra account name", field: "name" },
            { headerName: "Bee", field: "Bee" },
            { headerName: "Af", field: "Af" },
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
                    <MenuItem disabled value="">
                      Standard
                    </MenuItem>
                  </Select>
                </FormControl>
              ),
              date: "",
              account: <TextField variant="outlined" size="small" fullWidth />,
              name: <TextField variant="outlined" size="small" fullWidth />,
              Bee: <TextField variant="outlined" size="small" fullWidth />,
              Af: <TextField variant="outlined" size="small" fullWidth />,
            },
          ]}
        />
        <Typography fontWeight={500} my={1}>
          Description
        </Typography>
        <Box sx={{ display: "flex" }}>
          <TextField variant="outlined" size="small" fullWidth />
          <Button variant="contained" color="primary" sx={{ ml: 1 }}>
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default DocumentDetailBankStatement;
