import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import EditForm from "components/edit-form";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import { FieldType } from "types/ui-types";

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
            {
              headerName: "Bank account",
              field: "account",
              flex: 1,
              renderCell: () => {
                return <SearchBar iconPosition="right" />;
              },
            },
            { headerName: "Copy", field: "copy", flex: 1 },
            { headerName: "Date", field: "date", flex: 1 },
            {
              headerName: "Previous balance",
              field: "previous",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "perviousBal",
                        placeholder: "Previous Balance",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "New balance",
              field: "new",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "newBal",
                        placeholder: "New Balance",
                      },
                    ]}
                  />
                );
              },
            },
          ]}
          data={[
            {
              copy: 1,
              date: "",
            },
          ]}
        />
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <PrimaryTable
          columns={[
            {
              headerName: "Type",
              field: "type",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Choice,
                        options: ["standard"],
                        name: "type",
                      },
                    ]}
                  />
                );
              },
            },
            { headerName: "Trans.date", field: "date" },
            {
              headerName: "Contra account",
              flex: 1,
              field: "account",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "account",
                        placeholder: "Account",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Contra account name",
              flex: 1,
              field: "name",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "name",
                        placeholder: "Account Name",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Bee",
              flex: 1,
              field: "Bee",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      { type: FieldType.Text, name: "bee", placeholder: "Bee" },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Af",
              flex: 1,
              field: "Af",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      { type: FieldType.Text, name: "af", placeholder: "Af" },
                    ]}
                  />
                );
              },
            },
          ]}
          data={[{}]}
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
