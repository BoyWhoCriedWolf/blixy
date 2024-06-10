import { Paper } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  Balance,
  GENERAL_LEDGER_ACCOUNT_TYPE_ORDER,
  GeneralLedgerAccount,
  GeneralLedgerAccountType,
} from "services/types/general.ledger.account.types";
import { FieldType } from "types/ui-types";
import { currencyFormatter } from "utils/number-utils";

const AccountingBalanceSheetPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <TableManagement<Balance>
        apiService={generalLedgerAccountService}
        pageTitle="Balance Sheet"
        columns={[
          { headerName: "Number", field: "code" },
          { headerName: "Description", field: "description" },
          // { headerName: "Type", field: "type" },
          {
            headerName: "Opening Debit",
            field: "open_debit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.open_debit),
          },
          {
            headerName: "Opening Credit",
            field: "open_credit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.open_credit),
          },
          {
            headerName: "Debit",
            field: "debit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.debit),
          },
          {
            headerName: "Credit",
            field: "credit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.credit),
          },
          {
            headerName: "Debit Balance",
            field: "debit_balance",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.debit_balance),
          },
          {
            headerName: "Credit Balance",
            field: "credit_balance",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.credit_balance),
          },
        ]}

        fields={[
          // Number
          {
            displayName: "Number",
            name: "code",
            type: FieldType.Text,
          },
          // Description
          {
            displayName: "Description",
            name: "description",
            type: FieldType.Text,
          },
          // Debit
          {
            displayName: "Opening Debit",
            name: "open_debit",
            type: FieldType.Text,
          },
          // Opening Credit
          {
            displayName: "Opening Credit",
            name: "open_credit",
            type: FieldType.Text,
          },
          // Debit
          {
            displayName: "Debit",
            name: "debit",
            type: FieldType.Text,
          },
          // Credit
          {
            displayName: "Credit",
            name: "credit",
            type: FieldType.Text,
          },
          // Debit Balance
          {
            displayName: "Debit Balance",
            name: "debit_balance",
            type: FieldType.Text,
          },
          // Credit Balance
          {
            displayName: "Credit Balance",
            name: "credit_balance",
            type: FieldType.Text,
          },
        ]}
        availableActions={[]}
        // formatData={(v: Array<Balance>) => [
        //   ...(v ?? []),
        //   {
        //     description: "Total balance sheet",
        //     ODebit: v.reduce((ret, cur) => ret + (cur.open_debit ?? 0), 0),
        //     disableAction: true,
        //   },
        //   {
        //     description: "Balance",
        //     ODebit: v.reduce((ret, cur) => ret + (cur.open_debit ?? 0), 0),
        //     disableAction: true,
        //   },
        // ]}
        // formatData={(value: Array<GeneralLedgerAccount>) =>
        // value
        //   .sort(
        //     (a, b) =>
        //       GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
        //         a.type ?? GeneralLedgerAccountType.Revenue
        //       ] -
        //       GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
        //         b.type ?? GeneralLedgerAccountType.Revenue
        //       ]
        //   )
        //   .reduce(
        //     (ret, cur, curIndex, self) => {
        //       if (curIndex) {
        //         const prior = self[curIndex - 1];

        //         if (prior.type !== cur.type) {
        //           // @ts-ignore
        //           ret.push({ code: cur.type, disableAction: true });
        //         }
        //       }
        //       ret.push(cur);
        //       return ret;
        //     },
        //     [
        //       // @ts-ignore
        //       { code: value[0]?.type, disableAction: true },
        //     ] as Array<GeneralLedgerAccount>
        //   )
        // }
        formatData = {(data: Array<Balance | GeneralLedgerAccount>) => {
            
          const sortedData = data
            .sort(
              (a, b) =>
                GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
                  'type' in a ? a.type ?? GeneralLedgerAccountType.Revenue : GeneralLedgerAccountType.Revenue
                ] -
                GENERAL_LEDGER_ACCOUNT_TYPE_ORDER[
                  'type' in b ? b.type ?? GeneralLedgerAccountType.Revenue : GeneralLedgerAccountType.Revenue
                ]
            )
            .reduce(
              (ret, cur, curIndex, self) => {
                if (curIndex) {
                  const prior = self[curIndex - 1];
        
                  if ('type' in prior && 'type' in cur && prior.type !== cur.type) {
                    // @ts-ignore
                    ret.push({ code: cur.type, disableAction: true });
                  }
                }
                ret.push(cur);
                return ret;
              },
              [
                // @ts-ignore
                { code: data[0]?.type, disableAction: true },
              ] as Array<Balance | GeneralLedgerAccount>
            );

            const balanceData = [
              ...(sortedData ?? []),
              {
                description: "Total balance sheet",
                open_debit: sortedData.reduce((ret, cur) => {
                  if ('open_debit' in cur) {
                    return ret + (cur.open_debit ?? 0);
                  }
                  return ret;
                }, 0),
                disableAction: true,
              },
              {
                description: "Balance",
                open_debit: sortedData.reduce((ret, cur) => {
                  if ('open_debit' in cur) {
                    return ret + (cur.open_debit ?? 0);
                  }
                  return ret;
                }, 0),
                disableAction: true,
              },
            ];
        
          return balanceData;
        }}
        
        hideFooterPagination
      />
    </Paper>
  );
};

export default AccountingBalanceSheetPage;
