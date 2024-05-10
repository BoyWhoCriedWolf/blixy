import { Paper } from "@mui/material";
import TaxesList from "sections/taxes/list";

const AccountingTaxesPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <TaxesList />
    </Paper>
  );
};

export default AccountingTaxesPage;
