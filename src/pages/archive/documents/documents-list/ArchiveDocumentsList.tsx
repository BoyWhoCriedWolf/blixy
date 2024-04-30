import { Search } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DocumentsList from "sections/documents/documents-list";

const ArchiveDocumentsList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/archive/document/${"test"}`);
  };

  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
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
        <IconButton size="small">
          <Search />
        </IconButton>
      </Box>

      <DocumentsList onClick={handleClick} />
    </Paper>
  );
};

export default ArchiveDocumentsList;
