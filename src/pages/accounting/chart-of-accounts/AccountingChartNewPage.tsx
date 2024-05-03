import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EditForm from "components/edit-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FieldType } from "types/ui-types";

const AccountingChartNewPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 4, flexGrow: 1 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/accounting/chart")}
      >
        <KeyboardBackspace color="primary" fontSize="small" />
        <Typography
          color={"primary"}
          ml={1}
          sx={{ textDecoration: "underline" }}
        >
          Back to the overview
        </Typography>
      </Stack>
      <Typography fontSize={28} fontWeight={600} m={2}>
        New general ledger account
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography fontSize={24}>Facts</Typography>
        <EditForm
          lg={12}
          md={12}
          sm={12}
          xs={12}
          fields={[
            // Number
            {
              displayName: "Number",
              name: "number",
              type: FieldType.Text,
              placeholder: "Number",
            },
            // description
            {
              displayName: "Description",
              name: "description",
              type: FieldType.Text,
              isLabel: true,
              placeholder: "Description",
            },
            // General ledger account
            {
              displayName: "General ledger account",
              name: "general_ledger_account",
              type: FieldType.Choice,
              options: [
                "Account 1",
                "Account 2",
                "Account 3",
                "Account 4",
                "Account 5",
              ],
            },
          ]}
        />
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled button group"
          sx={{ mt: 2 }}
        >
          <Button>Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </Paper>
    </Box>
  );
};

export default AccountingChartNewPage;
