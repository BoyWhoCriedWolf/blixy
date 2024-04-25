import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DocumentsGrid from "sections/documents/documents-grid";

const ArchiveDocuments = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/archive/documents-list`);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <DocumentsGrid onClick={handleClick} />
      </Container>
    </Box>
  );
};

export default ArchiveDocuments;
