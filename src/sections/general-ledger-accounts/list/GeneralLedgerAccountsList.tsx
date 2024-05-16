import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import { useNavigate } from "react-router-dom";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  ACCOUNT_TRANSACTION_TYPES,
  AccountTransactionType,
  GENERAL_LEDGER_ACCOUNT_TYPE_ORDER,
  GeneralLedgerAccount,
  GeneralLedgerAccountType,
} from "services/types/general.ledger.account.types";
import { FieldType, GeneralOption } from "types/ui-types";
import { percentFormatter } from "utils/number-utils";

const GeneralLedgerAccountsList = () => {
  const navigate = useNavigate();

  const handleClick = (value: GeneralLedgerAccount) => {
    if (value.id) {
      navigate(value.id);
    }
  };

  return (
    <TableManagement<GeneralLedgerAccount>
      apiService={generalLedgerAccountService}
      pageTitle="General Ledger Accounts"
      title="General Ledger Account"
      onClickRow={handleClick}
      columns={[
        {
          headerName: "Code",
          field: "code",
          renderCell: (p: GridRenderCellParams) =>
            p?.row?.disableAction ? (
              <b>{p?.row?.code ?? ""}</b>
            ) : (
              p?.row?.code ?? null
            ),
        },
        { headerName: "Description", field: "description" },
        { headerName: "Type", field: "type" },
        {
          headerName: "Deductible",
          field: "deductible",
          renderCell: (p: GridRenderCellParams) =>
            p?.row?.disableAction
              ? null
              : percentFormatter(p?.row?.deductible, 0),
        },
      ]}
      filter={{
        account_transaction_type: AccountTransactionType.AllTransactions,
      }}
      filterFields={[
        {
          // displayName: "Type",
          name: "account_transaction_type",
          type: FieldType.Choice,
          options: ACCOUNT_TRANSACTION_TYPES,
          getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
          getOptionValue: (option?: GeneralOption) => option?.value ?? "",
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
      formatData={(value: Array<GeneralLedgerAccount>) =>
        value
          .sort(
            (a, b) =>
              GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
                a.type ?? GeneralLedgerAccountType.Revenue
              ] -
              GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
                b.type ?? GeneralLedgerAccountType.Revenue
              ]
          )
          .reduce(
            (ret, cur, curIndex, self) => {
              if (curIndex) {
                const prior = self[curIndex - 1];

                if (prior.type !== cur.type) {
                  // @ts-ignore
                  ret.push({ code: cur.type, disableAction: true });
                }
              }
              ret.push(cur);
              return ret;
            },
            [
              // @ts-ignore
              { code: value[0]?.type, disableAction: true },
            ] as Array<GeneralLedgerAccount>
          )
      }
      hideFooterPagination
    />
  );
};

export default GeneralLedgerAccountsList;
