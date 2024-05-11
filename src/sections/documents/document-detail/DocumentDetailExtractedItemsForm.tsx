import { AutoAwesome } from "@mui/icons-material";
import { Alert, Box } from "@mui/material";
import EditForm from "components/edit-form";
import contactService from "services/contact.service";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { Contact } from "services/types/contact.types";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { FieldType } from "types/ui-types";
import { joinStrings } from "utils/string-utils";

const DocumentDetailExtractedItemsForm = () => {
  return (
    <Box>
      <Alert color="warning" icon={<AutoAwesome />} title="72% Confidence">
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
            getOptions: async () => {
              const ret = await contactService.gets();
              return ret.data ?? [];
            },
            getOptionLabel: (option?: Contact) => option?.company_name ?? "",
            getOptionValue: (option?: Contact) => option?.id ?? "",
          },
          // General Ledger Account
          {
            displayName: "General Ledger Account",
            name: "account",
            type: FieldType.Choice,
            isLabel: true,
            getOptions: async () => {
              const ret = await generalLedgerAccountService.gets();
              return ret.data ?? [];
            },
            getOptionLabel: (option?: GeneralLedgerAccount) =>
              joinStrings(" ", option?.code, option?.description),
            getOptionValue: (option?: GeneralLedgerAccount) => option?.id ?? "",
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
