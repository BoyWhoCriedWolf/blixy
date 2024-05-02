import { Box, Grid } from "@mui/material";
import PageLoading from "components/loading/page-loading";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DocumentDetail from "sections/documents/document-detail/DocumentDetail";
import documentService from "services/document.service";
import { Document } from "services/types/document.types";

const ArchiveDocumentDetail = () => {
  const { id = "" } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState<Document>();
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const ret = await documentService.get({ id });
    setIsLoading(false);

    if (ret.success) {
      setData(ret.data);
    } else {
      enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Box p={1}>
          <PageLoading open={isLoading} />
          <DocumentDetail />
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        {data?.file_path ? (
          <iframe
            src={data?.file_path ?? ""}
            title="Document detail"
            width={"100%"}
            height={"100%"}
            style={{ border: "none", borderCollapse: "collapse" }}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ArchiveDocumentDetail;
