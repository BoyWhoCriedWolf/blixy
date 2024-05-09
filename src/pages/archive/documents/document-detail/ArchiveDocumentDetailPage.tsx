import { useParams } from "react-router-dom";
import DocumentDetail from "sections/documents/document-detail/DocumentDetail";

const ArchiveDocumentDetailPage = () => {
  const { id = "" } = useParams();

  return <DocumentDetail id={id} />;
};

export default ArchiveDocumentDetailPage;
