import { Search } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import DocumentsList from "sections/documents/documents-list";

const BankProcessedTransactionsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <Box sx={{ mb: 1 }}>
        <PageHeading actions={<Search fontSize="large" />}>
          Documents to be processed
        </PageHeading>
      </Box>
      <DocumentsList />
    </Paper>
  );
};

export default BankProcessedTransactionsPage;
