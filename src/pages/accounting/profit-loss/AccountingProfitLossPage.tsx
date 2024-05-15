import { Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import ProfitLossTotal from "sections/totals/profit-loss-total";

const AccountingProfitLossPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <PageHeading>Profit Loss Account</PageHeading>
      <ProfitLossTotal />
    </Paper>
  );
};

export default AccountingProfitLossPage;
