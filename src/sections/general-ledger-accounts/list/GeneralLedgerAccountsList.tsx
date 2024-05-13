import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { FieldType } from "types/ui-types";
import { percentFormatter } from "utils/number-utils";

const GeneralLedgerAccountsList = () => {
  return (
    <TableManagement<GeneralLedgerAccount>
      apiService={generalLedgerAccountService}
      pageTitle="General Ledger Accounts"
      title="General Ledger Account"
      columns={[
        { headerName: "Code", field: "code" },
        { headerName: "Description", field: "description" },
        { headerName: "Type", field: "type" },
        {
          headerName: "Deductible",
          field: "deductible",
          renderCell: (p: GridRenderCellParams<GeneralLedgerAccount>) =>
            percentFormatter(p?.row?.deductible),
        },
      ]}
      fields={[
        // Code
        {
          displayName: "Code",
          name: "code",
          type: FieldType.Text,
        },
        // Description
        {
          displayName: "Description",
          name: "description",
          type: FieldType.Text,
        },
        // // Type
        // {
        //   displayName: "Type",
        //   name: "type",
        //   type: FieldType.Choice,
        //   options: GENERAL_LEDGER_ACCOUNT_TYPES,
        //   getOptionLabel: (option: GeneralOption) => option?.name ?? "",
        //   getOptionValue: (option: GeneralOption) => option?.value ?? "",
        // },
        // Deductible
        {
          displayName: "Deductible",
          name: "deductible",
          type: FieldType.Percent,
        },
      ]}
      hideFooterPagination
    />
  );
};

export default GeneralLedgerAccountsList;
