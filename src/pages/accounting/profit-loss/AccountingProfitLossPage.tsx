import { Box } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import React from "react";
import ProfitLossTotal from "sections/totals/profit-loss-total";

const AccountingProfitLossPage = () => {
  return (
    <Box sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <PageHeading>Profit Loss Account</PageHeading>
      <ProfitLossTotal />
    </Box>
  );
};

export default AccountingProfitLossPage;
