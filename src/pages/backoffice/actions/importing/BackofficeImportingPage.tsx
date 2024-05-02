import { Box } from "@mui/material";
import UploadFileWidget from "components/upload-file-widget";
import React from "react";

const BackofficeImportingPage = () => {
  return (
    <Box sx={{ minHeight: "100%" }}>
      <UploadFileWidget />
    </Box>
  );
};

export default BackofficeImportingPage;
