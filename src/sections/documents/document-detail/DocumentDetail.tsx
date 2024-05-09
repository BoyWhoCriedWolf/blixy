import { Alert, Box, Collapse, Grid, Paper } from "@mui/material";
import EditForm from "components/edit-form";
import PageLoading from "components/loading/page-loading";
import PdfViewer from "components/pdf-viewer";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import documentService from "services/document.service";
import {
  DOCUMENT_TYPES,
  Document,
  DocumentType,
} from "services/types/document.types";
import { FieldType, GeneralOption } from "types/ui-types";
import DocumentDetailBankStatement from "./DocumentDetailBankStatement";
import DocumentDetailPurchaseInvoice from "./DocumentDetailPurchaseInvoice";
import DocumentDetailSalesInvoice from "./DocumentDetailSaleInvoice";
import DocumentDetailStandard from "./DocumentDetailStandard";

const DocumentDetail: FC<
  PropsWithChildren<{
    id?: string;
    data?: Document;
    readOnly?: boolean;
    paperContainer?: boolean;
  }>
> = ({ id = "", data: propsData, readOnly = false, paperContainer = true }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState<Document>();
  const [isLoading, setIsLoading] = useState(false);
  const documentType = data?.doc_type;

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
    if (id) {
      loadData();
    } else if (propsData) {
      setData(propsData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, propsData]);

  const selectTypeContent = (
    <EditForm<Document>
      data={data}
      onChange={setData}
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
    <Grid container flexGrow={1} spacing={1}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <PageLoading open={isLoading} />
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
                onChange={setData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.PurchaseInvoice}>
            <Box>
              <DocumentDetailPurchaseInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={setData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.SalesInvoice}>
            <Box>
              <DocumentDetailSalesInvoice
                paperContainer={paperContainer}
                data={data}
                onChange={setData}
              />
            </Box>
          </Collapse>
          <Collapse in={documentType === DocumentType.BankStatement}>
            <Box>
              <DocumentDetailBankStatement
                paperContainer={paperContainer}
                data={data}
                onChange={setData}
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
