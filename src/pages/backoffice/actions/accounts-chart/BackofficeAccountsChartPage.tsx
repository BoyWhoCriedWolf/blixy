import { Paper } from "@mui/material";
import React from "react";
import GeneralLedgerAccountsList from "sections/general-ledger-accounts/list";

const BackofficeAccountsChartPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <GeneralLedgerAccountsList />
    </Paper>
  );
};

export default BackofficeAccountsChartPage;
