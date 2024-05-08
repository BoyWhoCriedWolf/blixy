import { Search } from "@mui/icons-material";
import { Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";

const BankProcessedTransactionsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading actions={<Search fontSize="large" />}>
        Documents to be processed
      </PageHeading>
    </Paper>
  );
};

export default BankProcessedTransactionsPage;
