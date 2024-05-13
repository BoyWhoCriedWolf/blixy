import { Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import DocumentDetail from "sections/documents/document-detail";

const BackofficeAccountDetailDocumentPage = () => {
  const {
    // accountId = "",
    documentId = "",
  } = useParams();

  return (
    <Paper sx={{ m: 2, p: 2, flexGrow: 1 }}>
      <DocumentDetail id={documentId} readOnly />
    </Paper>
  );
};

export default BackofficeAccountDetailDocumentPage;
