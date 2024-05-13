import {
  AssignmentTurnedIn,
  Delete,
  NavigateBefore,
  NavigateNext,
  Save,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import ConfirmButtonContainer from "components/containers/confirm-button-container";
import EditForm from "components/edit-form";
import LoaderContainer from "components/loading/loader-container";
import PageLoading from "components/loading/page-loading";
import PdfViewer from "components/pdf-viewer";
import PageHeading from "components/typography/page-heading";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import documentService from "services/document.service";
import {
  DOCUMENT_TYPES,
  Document,
  DocumentType,
} from "services/types/document.types";
import { DispatchFunction, FieldType, GeneralOption } from "types/ui-types";
import { downloadPdfFromUrl } from "utils/fetch-utils";
import DocumentDetailBankStatement from "./DocumentDetailBankStatement";
import DocumentDetailPurchaseInvoice from "./DocumentDetailPurchaseInvoice";
import DocumentDetailSalesInvoice from "./DocumentDetailSaleInvoice";
import DocumentDetailStandard from "./DocumentDetailStandard";

const DocumentDetail: FC<
  PropsWithChildren<{
    id?: string;
    data?: Document;
    onChange?: DispatchFunction<Document>;
    readOnly?: boolean;
    paperContainer?: boolean;
  }>
> = ({
  id = "",
  data: propsData,
  onChange,
  readOnly = false,
  paperContainer = true,
}) => {
  const navigate = useNavigate();
  const snb = useSnackbar();

  const [list, setList] = useState<Array<Document>>([]);
  const [data, setData] = useState<Document>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);

  const documentIndex = useMemo(
    () => list.findIndex((item) => item.id === data?.id),
    [data?.id, list]
  );
  const documentType = data?.doc_type;
  const isLastDocument = documentIndex === list.length - 1;

  const loadList = async () => {
    setIsLoadingList(true);
    const ret = await documentService.gets();
    setIsLoadingList(false);

    if (ret.success) {
      setList(ret.data ?? []);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const ret = await documentService.get({ id });
    setIsLoading(false);

    if (ret.success) {
      setData(ret.data ?? ({} as Document));
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  const handleChangeData: DispatchFunction<Document> = (v) => {
    if (onChange) {
      onChange(v);
    } else {
      setData(v);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    const ret = await documentService.save({ data: data });
    setIsLoading(false);
    if (ret.success) {
      snb.enqueueSnackbar("Successfully saved!", { variant: "success" });
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  const handleDelete = async () => {
    if (data?.id) {
      setIsLoading(true);
      const ret = await documentService.delete({ id: data?.id });
      setIsLoading(false);
      if (ret.success) {
        snb.enqueueSnackbar("Successfully deleted!", { variant: "success" });
        navigate(-1);
      } else {
        snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
      }
    }
  };

  const handleNext = async () => {
    const nextId = list[documentIndex + 1]?.id;
    if (nextId) {
      navigate(`/archive/document/${nextId}`);
    }
  };

  const handleBefore = async () => {
    const beforeId = list[documentIndex - 1]?.id;
    if (beforeId) {
      navigate(`/archive/document/${beforeId}`);
    }
  };

  const handleApprove = async () => {
    setIsLoading(true);
    const ret = await documentService.save({ data: data });
    setIsLoading(false);
    if (ret.success) {
      snb.enqueueSnackbar("Successfully saved!", { variant: "success" });
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    const ret = await downloadPdfFromUrl(data?.file_path, data?.filename);
    setIsLoading(false);
    if (ret) {
      snb.enqueueSnackbar("Successfully downloaded!", { variant: "success" });
    } else {
      snb.enqueueSnackbar("Failed to download", { variant: "warning" });
    }
  };

  useEffect(() => {
    if (id) {
      loadData();
    } else if (propsData) {
      setData(propsData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, propsData]);

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectTypeContent = (
    <EditForm<Document>
      data={data}
      onChange={handleChangeData}
      fields={[
        {
          displayName: "Document Type",
          name: "doc_type",
          type: FieldType.Choice,
          options: DOCUMENT_TYPES,
          getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
          getOptionValue: (option?: GeneralOption) => option?.value ?? "",
        },
      ]}
    />
  );

  return (
    <Grid container flexGrow={1} spacing={1} sx={{ h: "100%" }}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PageLoading open={isLoading} />
        <Paper sx={{ p: 2 }}>
          <PageHeading
            mb={0}
            actions={
              <Grid container spacing={1}>
                <Grid item>
                  <ConfirmButtonContainer onClick={handleDelete}>
                    <Button color="error" startIcon={<Delete />}>
                      Delete
                    </Button>
                  </ConfirmButtonContainer>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleSave}
                    color="success"
                    startIcon={<Save />}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleApprove}
                    color="warning"
                    startIcon={<AssignmentTurnedIn />}
                  >
                    Approve
                  </Button>
                </Grid>
                <Grid item>
                  <LoaderContainer open={isLoadingList}>
                    <IconButton
                      onClick={handleBefore}
                      color="inherit"
                      disabled={!documentIndex}
                    >
                      <NavigateBefore />
                    </IconButton>
                  </LoaderContainer>
                </Grid>
                <Grid item>
                  <LoaderContainer open={isLoadingList}>
                    <IconButton
                      onClick={handleNext}
                      color="inherit"
                      disabled={isLastDocument}
                    >
                      <NavigateNext />
                    </IconButton>
                  </LoaderContainer>
                </Grid>
                <Grid item>
                  <Button onClick={handleDownload} color="primary">
                    Download
                  </Button>
                </Grid>
              </Grid>
            }
          >
            Document
          </PageHeading>
        </Paper>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        {paperContainer ? (
          <Paper sx={{ p: 1, mb: 1 }}>{selectTypeContent}</Paper>
        ) : (
          selectTypeContent
        )}

        <Box>
          {/* <Collapse in={documentType === "General"}>
              <Box>
                <DocumentDetailGeneral />
              </Box>
            </Collapse> */}
          <Collapse in={documentType === DocumentType.Standard}>
            <Box>
              <DocumentDetailStandard
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.PurchaseInvoice}>
            <Box>
              <DocumentDetailPurchaseInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.SalesInvoice}>
            <Box>
              <DocumentDetailSalesInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.BankStatement}>
            <Box>
              <DocumentDetailBankStatement
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
              />
            </Box>
          </Collapse>
        </Box>
      </Grid>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        {data?.file_path ? (
          <PdfViewer src={data?.file_path ?? ""} title={data.description} />
        ) : (
          <Alert color="warning">Not available PDF document</Alert>
        )}
      </Grid>
    </Grid>
  );
};

export default DocumentDetail;
