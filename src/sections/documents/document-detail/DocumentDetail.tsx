import {
  AssignmentTurnedIn,
  Delete,
  Edit,
  EditOff,
  NavigateBefore,
  NavigateNext,
  Save,
  Visibility,
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
import ModalContainer from "components/containers/modal-container";
import TabsContainer from "components/containers/tabs-container";
import EditForm from "components/edit-form";
import LoaderContainer from "components/loading/loader-container";
import PageLoading from "components/loading/page-loading";
import PdfViewer from "components/pdf-viewer";
import PrimaryTable from "components/table";
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
import { currencyFormatter } from "utils/number-utils";
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
    deleted?: boolean;
    approved?: boolean;
    doc_type?: DocumentType;
    general_ledger_account_id?: string;
    basePath?: string;
    noNavigation?: boolean;
  }>
> = ({
  id = "",
  data: propsData,
  onChange,
  readOnly: propsReadOnly = false,
  paperContainer = true,
  deleted,
  approved,
  doc_type,
  general_ledger_account_id,
  basePath = "/archive/document",
  noNavigation = false,
}) => {
  const navigate = useNavigate();
  const snb = useSnackbar();

  const [list, setList] = useState<Array<Document>>([]);
  const [data, setData] = useState<Document>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [isViewText, setIsViewText] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const currentIndex = useMemo(
    () => list.findIndex((item) => item.id === data?.id),
    [data?.id, list]
  );
  const documentType = data?.doc_type;
  const isLastOfList = currentIndex === list.length - 1;

  const loadList = async () => {
    setIsLoadingList(true);
    const ret = await documentService.gets({
      deleted,
      approved,
      doc_type,
      general_ledger_account_id,
    });
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
    const destId = list[currentIndex + 1]?.id;
    if (destId) {
      navigate(`${basePath}/${destId}`);
    }
  };

  const handleBefore = async () => {
    const destId = list[currentIndex - 1]?.id;
    if (destId) {
      navigate(`${basePath}/${destId}`);
    }
  };

  const handleApprove = async () => {
    const submitData = {
      ...(data ?? {}),
      approved: true,
    } as Document;
    setIsLoading(true);
    const ret = await documentService.save({ data: submitData });
    setIsLoading(false);
    if (ret.success) {
      snb.enqueueSnackbar("Successfully saved!", { variant: "success" });
      setData(submitData);
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

  const handleViewText = () => {
    setIsViewText(true);
  };

  const handleToggleReadOnly = () => {
    setReadOnly((s = false) => !s);
  };

  useEffect(() => {
    setReadOnly(propsReadOnly);
  }, [propsReadOnly]);

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
      readOnly={readOnly}
    />
  );

  return (
    <Grid container flexGrow={1} spacing={1} sx={{ h: "100%" }}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <PageLoading open={isLoading} />
        <Paper sx={{ p: 2 }}>
          <ModalContainer
            isOpen={isViewText}
            onClose={() => setIsViewText(false)}
            title="Recognized text content"
          >
            <TabsContainer
              data={[
                {
                  label: "OCR",
                  render: (
                    <Box sx={{ whiteSpace: "pre-line" }}>
                      {data?.text_content ?? ""}
                    </Box>
                  ),
                },
                {
                  label: "Recognizition",
                  render: (
                    <PrimaryTable
                      columns={[
                        { headerName: "Field", field: "field" },
                        { headerName: "Value", field: "value" },
                      ]}
                      data={[
                        { field: "Document Date", value: data?.document_date },
                        { field: "OrderDate", value: "" },
                        {
                          field: "Payment Method",
                          value: data?.payment_method,
                        },
                        { field: "Payment Due Date", value: "" },
                        { field: "Currency", value: data?.vat_amount_currency },
                        { field: "Document Type", value: data?.doc_type },
                        { field: "Invoice Number", value: data?.reference },
                        { field: "Document Number", value: "" },
                        { field: "OrderNumber", value: "" },
                        {
                          field: "TotalExclVat",
                          value: data?.vat_amount
                            ? currencyFormatter(data?.vat_amount)
                            : "",
                        },
                        {
                          field: "Total Vat",
                          value: data?.vat_amount
                            ? currencyFormatter(data?.vat_amount)
                            : "",
                        },
                        {
                          field: "Total Incl Vat",
                          value: data?.amount
                            ? currencyFormatter(data?.amount)
                            : "",
                        },
                        {
                          field: "Supplier Name",
                          value: data?.contact?.company_name ?? "",
                        },
                        {
                          field: "Supplier Vat Number",
                          value: data?.contact?.btw_number ?? "",
                        },
                        {
                          field: "Supplier Country Code",
                          value: data?.contact?.country ?? "",
                        },
                        {
                          field: "Supplier Chamber Commerce Number",
                          value: data?.contact?.kvk_number ?? "",
                        },
                        {
                          field: "Supplier Address",
                          value: data?.contact?.address_street ?? "",
                        },
                        { field: "IBAN", value: "" },
                        {
                          field: "Bank Account Number",
                          value: "",
                        },
                        {
                          field: "Bank Registration Number",
                          value: "",
                        },
                        { field: "Receiver Name", value: "" },
                        {
                          field: "Receiver Address",
                          value: "",
                        },
                        {
                          field: "Receiver Vat Number",
                          value: "",
                        },
                        {
                          field: "Receiver Country Code",
                          value: "",
                        },
                      ]}
                      hideFooterPagination
                    />
                  ),
                },
              ]}
            />
          </ModalContainer>
          <PageHeading
            mb={0}
            actions={
              <Grid container spacing={1}>
                {propsReadOnly ? (
                  <Grid item>
                    {readOnly ? (
                      <Button
                        onClick={handleToggleReadOnly}
                        color="info"
                        startIcon={<Edit />}
                      >
                        Edit mode
                      </Button>
                    ) : (
                      <Button
                        onClick={handleToggleReadOnly}
                        color="info"
                        startIcon={<EditOff />}
                      >
                        Close Edit mode
                      </Button>
                    )}
                  </Grid>
                ) : null}
                <Grid item>
                  <Button
                    onClick={handleViewText}
                    color="info"
                    startIcon={<Visibility />}
                  >
                    Show text content
                  </Button>
                </Grid>
                {readOnly ? null : (
                  <Grid item>
                    <ConfirmButtonContainer onClick={handleDelete}>
                      <Button color="error" startIcon={<Delete />}>
                        Delete
                      </Button>
                    </ConfirmButtonContainer>
                  </Grid>
                )}
                {readOnly ? null : (
                  <Grid item>
                    <Button
                      onClick={handleSave}
                      color="success"
                      startIcon={<Save />}
                    >
                      Save
                    </Button>
                  </Grid>
                )}
                <Grid item>
                  <Button
                    onClick={handleApprove}
                    color="warning"
                    startIcon={<AssignmentTurnedIn />}
                    disabled={data?.approved || readOnly}
                  >
                    {data?.approved ? "Approved" : "Approve"}
                  </Button>
                </Grid>
                {noNavigation ? null : (
                  <Grid item>
                    <LoaderContainer open={isLoadingList}>
                      <IconButton
                        onClick={handleBefore}
                        color="inherit"
                        disabled={!currentIndex}
                      >
                        <NavigateBefore />
                      </IconButton>
                    </LoaderContainer>
                  </Grid>
                )}
                {noNavigation ? null : (
                  <Grid item>
                    <LoaderContainer open={isLoadingList}>
                      <IconButton
                        onClick={handleNext}
                        color="inherit"
                        disabled={isLastOfList}
                      >
                        <NavigateNext />
                      </IconButton>
                    </LoaderContainer>
                  </Grid>
                )}
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
                readOnly={readOnly}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.PurchaseInvoice}>
            <Box>
              <DocumentDetailPurchaseInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
                readOnly={readOnly}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.SalesInvoice}>
            <Box>
              <DocumentDetailSalesInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
                readOnly={readOnly}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.BankStatement}>
            <Box>
              <DocumentDetailBankStatement
                paperContainer={paperContainer}
                data={data}
                onChange={handleChangeData}
                readOnly={readOnly}
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
