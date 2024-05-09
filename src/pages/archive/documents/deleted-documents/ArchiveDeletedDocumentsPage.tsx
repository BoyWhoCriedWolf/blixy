import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import DocumentsList from "sections/documents/documents-list";
const ArchiveDeletedDocumentsPage = () => {
  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <IconButton size="small">
            <Search />
          </IconButton>
        }
      >
        Deleted documents
      </PageHeading>
      <DocumentsList deleted />
    </Paper>
  );
};

export default ArchiveDeletedDocumentsPage;
