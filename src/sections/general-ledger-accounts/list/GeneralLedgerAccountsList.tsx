import TableManagement from "components/table-management";
import contactService from "services/contact.service";
import {
  GENERAL_LEDGER_ACCOUNT_TYPES,
  GeneralLedgerAccount,
} from "services/types/general.ledger.account.types";
import { FieldType, GeneralOption } from "types/ui-types";

const GeneralLedgerAccountsList = () => {
  return (
    <TableManagement<GeneralLedgerAccount>
      apiService={contactService}
      pageTitle="Contacts"
      columns={[
        { headerName: "Code", field: "id" },
        { headerName: "Description", field: "description" },
        { headerName: "Type", field: "type" },
      ]}
      fields={[
        // Description
        {
          displayName: "Description",
          name: "description",
          type: FieldType.Text,
        },
        // Type
        {
          displayName: "Type",
          name: "type",
          type: FieldType.Choice,
          options: GENERAL_LEDGER_ACCOUNT_TYPES,
          getOptionLabel: (option: GeneralOption) => option?.name ?? "",
          getOptionValue: (option: GeneralOption) => option?.value ?? "",
        },
      ]}
      hideFooterPagination
    />
  );
};

export default GeneralLedgerAccountsList;
