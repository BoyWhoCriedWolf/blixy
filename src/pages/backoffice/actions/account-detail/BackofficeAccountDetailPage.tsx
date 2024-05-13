import { Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import GeneralLedgerAccountDetail from "sections/general-ledger-accounts/detail";

const BackofficeAccountDetailPage = () => {
  const { accountId = "" } = useParams();

  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <GeneralLedgerAccountDetail accountId={accountId} />
    </Paper>
  );
};

export default BackofficeAccountDetailPage;
