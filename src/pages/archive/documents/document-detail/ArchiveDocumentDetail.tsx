import { Grid, Paper } from "@mui/material";
import DocumentDetail from "sections/documents/document-detail/DocumentDetail";

const ArchiveDocumentDetail = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item lg={6} md={6} sm={6} xs={12}></Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Paper sx={{ px: 1 }}>
          <DocumentDetail />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ArchiveDocumentDetail;
