import { Paper } from "@mui/material";
import GeneralLedgerAccountsList from "sections/general-ledger-accounts/list";

const AccountingChartPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <GeneralLedgerAccountsList />
    </Paper>
  );
};

export default AccountingChartPage;
