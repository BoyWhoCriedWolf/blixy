import { Alert, Grid, Paper, Stack } from "@mui/material";
import PageLoading from "components/loading/page-loading";
import PdfViewer from "components/pdf-viewer";
import PrimaryTable from "components/table";
import PageHeading from "components/typography/page-heading";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import documentService from "services/document.service";
import { Document } from "services/types/document.types";

const ArchiveRecentlyViewedDocuments = () => {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<Document>>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document>();

  const loadData = async () => {
    setIsLoading(true);
    const ret = await documentService.gets();
    setIsLoading(false);

    if (ret.success) {
      setData(ret.data ?? []);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  const handleClickRow = (value: Document) => {
    setSelectedDocument(value);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack flexGrow={1}>
      <PageLoading open={isLoading} />
      <PageHeading>Recently Viewed Documents</PageHeading>
      <Grid container spacing={1} alignItems={"stretch"} flexGrow={1}>
        <Grid item lg={7} md={8} sm={12} xs={12}>
          <Paper>
            <PrimaryTable<Document>
              data={data}
              columns={[
                { headerName: "Type", field: "doc_type" },
                { headerName: "Date", field: "created_at" },
                { headerName: "Description", field: "description" },
                { headerName: "Relation", field: "relation" },
              ]}
              onClickRow={handleClickRow}
            />
          </Paper>
        </Grid>
        <Grid item lg={5} md={4} sm={false} xs={false}>
          {selectedDocument?.file_path ? (
            <PdfViewer src={selectedDocument?.file_path} />
          ) : (
            <Alert color="info">Select a document to preview its content</Alert>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ArchiveRecentlyViewedDocuments;
