import { Paper } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import PageHeading from "components/typography/page-heading";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  ACCOUNT_TRANSACTION_TYPES,
  AccountTransactionType,
  Balance,
} from "services/types/general.ledger.account.types";
import { FieldType, GeneralOption } from "types/ui-types";
import { currencyFormatter } from "utils/number-utils";

const AccountingBalanceSheetPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading>Balance Sheet</PageHeading>
      <TableManagement<Balance>
        apiService={generalLedgerAccountService}
        columns={[
          { headerName: "Number", field: "code" },
          { headerName: "Description", field: "description" },
          {
            headerName: "Opening Debit",
            field: "ODebit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.ODebit),
          },
          {
            headerName: "Opening Credit",
            field: "OCredit",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.OCredit),
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
            field: "DBalance",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.DBalance),
          },
          {
            headerName: "Credit Balance",
            field: "CBalance",
            renderCell: (p: GridRenderCellParams<Balance>) =>
              currencyFormatter(p?.row?.CBalance),
          },
        ]}
        // filter={{
        //   account_transaction_type: AccountTransactionType.AllTransactions,
        // }}
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
            name: "ODebit",
            type: FieldType.Text,
          },
          // Opening Credit
          {
            displayName: "Opening Credit",
            name: "OCredit",
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
            name: "DBalance",
            type: FieldType.Text,
          },
          // Credit Balance
          {
            displayName: "Credit Balance",
            name: "CBalance",
            type: FieldType.Text,
          },
        ]}
        availableActions={["View"]}
        formatData={(v: Array<Balance>) => [
          ...(v ?? []),
          {
            description: "Total balance sheet",
            amount: v.reduce((ret, cur) => ret + (cur.ODebit ?? 0), 0),
            disableAction: true,
          },
          {
            description: "Balance ",
            amount: v.reduce((ret, cur) => ret + (cur.ODebit ?? 0), 0),
            disableAction: true,
          },
        ]}
        hideFooterPagination
      />
    </Paper>
  );
};

export default AccountingBalanceSheetPage;
