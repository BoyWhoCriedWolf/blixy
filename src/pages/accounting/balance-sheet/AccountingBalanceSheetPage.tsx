import { Paper } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import PageHeading from "components/typography/page-heading";
import documentService from "services/document.service";
import { Balance } from "services/types/general.ledger.account.types";
import { currencyFormatter } from "utils/number-utils";

const AccountingBalanceSheetPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading>Trial Balance Sheet</PageHeading>
      <TableManagement<Balance>
        apiService={documentService}
        // filter={{
        //   approved: true,
        //   ...(general_ledger_account_id ? { general_ledger_account_id } : {}),
        //   ...(general_ledger_account_types
        //     ? { general_ledger_account_types: general_ledger_account_types }
        //     : {}),
        // }}
        columns={[
          { headerName: "Number", field: "number" },
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
        actionsF={() => false}
        hideFooterPagination
      />
    </Paper>
  );
};

export default AccountingBalanceSheetPage;
