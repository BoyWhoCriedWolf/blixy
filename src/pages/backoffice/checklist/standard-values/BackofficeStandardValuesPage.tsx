import { Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import StandardValuesList from "sections/standard-values/list";

const BackofficeStandardValuesPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2 }}>
      <PageHeading>Standard Values</PageHeading>
      <StandardValuesList />
    </Paper>
  );
};

export default BackofficeStandardValuesPage;
