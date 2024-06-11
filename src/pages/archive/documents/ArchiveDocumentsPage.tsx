import { Box, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import DocumentsGrid from "sections/documents/documents-grid";

const ArchiveDocumentsPage = () => {
  const { administration_id = "" } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/" + administration_id + `/archive/documents-list`);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <DocumentsGrid onClick={handleClick} />
      </Container>
    </Box>
  );
};

export default ArchiveDocumentsPage;
