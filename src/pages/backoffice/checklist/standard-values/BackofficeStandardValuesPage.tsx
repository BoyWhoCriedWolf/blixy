import { Paper } from "@mui/material";
import StandardValuesList from "sections/standard-values/list";

const BackofficeStandardValuesPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <StandardValuesList />
    </Paper>
  );
};

export default BackofficeStandardValuesPage;
