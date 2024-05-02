import {
  Alert,
  Box,
  Button,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import EditForm from "components/edit-form";
import { FieldType } from "types/ui-types";

const BankExportTransactions = () => {
  return (
    <Box sx={{ py: 10, flexGrow: 1 }}>
      <Container maxWidth="md">
        <Paper>
          <Box sx={{ p: 2 }}>
            <Typography fontSize={24} fontWeight={600} color="primary">
              Export transactions
            </Typography>
          </Box>
          <Box sx={{ p: 4 }}>
            <Alert color="info" sx={{ mb: 4 }}>
              You can export financial transactions in different formats. Select
              the desired format, administration and fiscal year. Click the
              'Export' button to start the process.
            </Alert>
            <EditForm
              lg={12}
              md={12}
              sm={12}
              xs={12}
              fields={[
                // Export to
                {
                  displayName: "Export to",
                  name: "export",
                  type: FieldType.Choice,
                  isLabel: true,
                  options: [
                    "XAF Auditfile (3.2)",
                    "XAF Auditfile (3.1)",
                    "XAF Auditfile (3.0)",
                  ],
                },
                // Administration
                {
                  displayName: "Administration",
                  name: "admin",
                  type: FieldType.Choice,
                  isLabel: true,
                  options: ["JV Services & Consulting B.V."],
                },
                // Financial year
                {
                  displayName: "Financial year",
                  name: "year",
                  type: FieldType.Choice,
                  isLabel: true,
                  options: ["All years", "2024", "2023"],
                },
                // RGS Version
                {
                  displayName: "RGS Version",
                  name: "version",
                  type: FieldType.Choice,
                  isLabel: true,
                  options: ["3.5", "3.4", "3.3"],
                },
              ]}
            />
            <Box sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
              <Button variant="contained">Export</Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BankExportTransactions;
