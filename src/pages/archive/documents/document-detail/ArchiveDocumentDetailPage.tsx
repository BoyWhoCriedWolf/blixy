import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import DocumentDetail from "sections/documents/document-detail/DocumentDetail";

const ArchiveDocumentDetailPage = () => {
  const { id = "" } = useParams();

  return (
    <Box flexGrow={1} p={2}>
      <DocumentDetail id={id} />
    </Box>
  );
};

export default ArchiveDocumentDetailPage;
