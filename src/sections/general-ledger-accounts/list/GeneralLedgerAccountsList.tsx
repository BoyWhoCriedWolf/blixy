import TableManagement from "components/table-management";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  GENERAL_LEDGER_ACCOUNT_TYPES,
  GeneralLedgerAccount,
} from "services/types/general.ledger.account.types";
import { FieldType, GeneralOption } from "types/ui-types";

const GeneralLedgerAccountsList = () => {
  return (
    <TableManagement<GeneralLedgerAccount>
      apiService={generalLedgerAccountService}
      pageTitle="General Ledger Accounts"
      title="General Ledger Account"
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
