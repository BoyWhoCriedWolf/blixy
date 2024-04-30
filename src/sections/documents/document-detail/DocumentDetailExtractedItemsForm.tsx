import { AutoAwesome } from "@mui/icons-material";
import { Alert, Box } from "@mui/material";
import EditForm from "components/edit-form";
import { FieldType } from "types/ui-types";

const DocumentDetailExtractedItemsForm = () => {
  return (
    <Box>
      <Alert
        color="warning"
        icon={<AutoAwesome />}
        title="72% Confidence"
        sx={{ m: 2 }}
      >
        Found user in narration - This is dummy text. This text can be two line
        long giving a lot of space for reasoning.
      </Alert>

      <EditForm
        lg={6}
        md={6}
        sm={12}
        xs={12}
        fields={[
          // Contact
          {
            displayName: "Contact",
            name: "contact",
            type: FieldType.Choice,
            isLabel: true,
            options: [
              "Contact 1",
              "Contact 2",
              "Contact 3",
              "Contact 4",
              "Contact 5",
            ],
          },
          // General Ledger Account
          {
            displayName: "General Ledger Account",
            name: "account",
            type: FieldType.Choice,
            isLabel: true,
            options: [
              "Account 1",
              "Account 2",
              "Account 3",
              "Account 4",
              "Account 5",
            ],
          },
          // Total
          {
            displayName: "Total",
            name: "total",
            type: FieldType.Money,
          },
          // VAT Amount
          {
            displayName: "VAT Amount",
            name: "vat_amount",
            type: FieldType.Money,
          },
          // TDS
          {
            displayName: "TDS",
            name: "tds",
            type: FieldType.Money,
          },
          // Item Count
          {
            displayName: "Item Count",
            name: "item_count",
            type: FieldType.Integer,
          },
          // Linked Statement
          {
            displayName: "Linked Statement",
            name: "linked_statement",
            type: FieldType.Text,
          },
        ]}
      />
    </Box>
  );
};

export default DocumentDetailExtractedItemsForm;
