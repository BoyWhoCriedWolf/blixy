import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import PageHeading from "components/typography/page-heading";
import { useNavigate, useParams } from "react-router-dom";
import DocumentsList from "sections/documents/documents-list";
import { Document } from "services/types/document.types";

const ArchiveDocumentsListPage = () => {
  const { administration_id = "" } = useParams();
  const navigate = useNavigate();

  const handleClick = (row: Document) => {
    navigate("/" + administration_id + `/archive/document/${row?.id}`);
  };

  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <IconButton size="small">
            <Search />
          </IconButton>
        }
      >
        Documents to be processed
      </PageHeading>

      <DocumentsList onClick={handleClick} />
    </Paper>
  );
};

export default ArchiveDocumentsListPage;
