import { Search } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import DocumentsList from "sections/documents/documents-list";

const BankProcessedTransactionsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2 }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, px: 2 }}
      >
        <Typography
          fontSize={30}
          fontWeight={600}
          color={(theme) => theme.palette.warning.main}
        >
          Documents to be processed
        </Typography>
        <Search fontSize="large" />
      </Box>
      <DocumentsList />
    </Paper>
  );
};

export default BankProcessedTransactionsPage;
