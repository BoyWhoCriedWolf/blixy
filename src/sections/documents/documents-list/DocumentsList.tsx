import { Delete, Restore } from "@mui/icons-material";
import { Box, Grid, IconButton, Tooltip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import ConfirmButtonContainer from "components/containers/confirm-button-container";
import ModalContainer from "components/containers/modal-container";
import IconBankStatement from "components/custom-icons/IconBankStatement";
import IconGeneralDocument from "components/custom-icons/IconGeneralDocument";
import IconPurchaseInvoice from "components/custom-icons/IconPurchaseInvoice";
import IconSalesInvoice from "components/custom-icons/IconSalesInvoice";
import PageLoading from "components/loading/page-loading";
import TableManagement from "components/table-management";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useState } from "react";
import documentService from "services/document.service";
import { Document, DocumentType } from "services/types/document.types";
import { ymd2dmy } from "utils/datetime-utils";
import DocumentDetail from "../document-detail";

const DocumentsList: FC<
  PropsWithChildren<{ onClick?: (v: Document) => void; deleted?: boolean }>
> = ({ onClick = () => null, deleted = false }) => {
  const snb = useSnackbar();

  const [formData, setFormData] = useState<Document>({} as Document);
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(1);

  const handleEdit = (value: Document) => {
    setFormData(value);
    setIsOpen(true);
    setIsView(false);
  };

  const handleView = (value: Document) => {
    setFormData(value);
    setIsOpen(true);
    setIsView(true);
  };

  const handleSave = async () => {
    setIsOpen(false);
    setIsLoading(true);
    const ret = await documentService.save({ data: formData });
    setIsLoading(false);
    if (ret.success) {
      snb.enqueueSnackbar("Successfully saved!", { variant: "success" });
      setReload((s) => s + 1);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
      setIsOpen(true);
    }
  };

  const handleRestore = async (value: Document) => {
    setIsLoading(true);
    const ret = await documentService.restore({ id: value?.id });
    setIsLoading(false);
    if (ret.success) {
      setReload((s) => s + 1);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  const handleDeleteForever = async (value: Document) => {
    setIsLoading(true);
    const ret = await documentService.deleteForever({ id: value?.id });
    setIsLoading(false);
    if (ret.success) {
      setReload((s) => s + 1);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  return (
    <Box sx={{ minHeight: "100%" }}>
      <PageLoading open={isLoading} />

      <TableManagement<Document>
        reload={reload}
        apiService={documentService}
        filter={{ ...(deleted ? { deleted } : {}) }}
        columns={[
          {
            headerName: "Delivered",
            field: "created_at",
            renderCell: (p: GridRenderCellParams<Document>) =>
              ymd2dmy(p.row.created_at),
          },
          {
            headerName: "Type",
            field: "doc_type",
            align: "center",
            renderCell: (p: GridRenderCellParams<Document>) =>
              p.row.doc_type === DocumentType.BankStatement ? (
                <Tooltip title="Bank Statement">
                  <div>
                    <IconBankStatement />
                  </div>
                </Tooltip>
              ) : p.row.doc_type === DocumentType.Standard ? (
                <Tooltip title="Standard">
                  <div>
                    <IconGeneralDocument />
                  </div>
                </Tooltip>
              ) : p.row.doc_type === DocumentType.PurchaseInvoice ? (
                <Tooltip title="Purchase Invoice">
                  <div>
                    <IconPurchaseInvoice />
                  </div>
                </Tooltip>
              ) : p.row.doc_type === DocumentType.SalesInvoice ? (
                <Tooltip title="Sales Invoice">
                  <div>
                    <IconSalesInvoice />
                  </div>
                </Tooltip>
              ) : null,
          },
          { headerName: "Description", field: "description" },
          { headerName: "File Name", field: "file_name" },
          { headerName: "KB", field: "kb" },
          { headerName: "Vendor", field: "vendor" },
          { headerName: "Status", field: "status" },
          { headerName: "IDR status", field: "idr_status" },
          { headerName: "Rcg", field: "rcg" },
          { headerName: "Information", field: "information" },
        ]}
        availableActions={deleted ? [] : ["Edit", "Delete"]}
        onEdit={handleEdit}
        onView={handleView}
        hideFooterPagination
        actionsF={
          deleted
            ? (row: Document) => (
                <Grid container alignItems={"center"}>
                  <Grid item>
                    <Tooltip title="Restore">
                      <IconButton
                        onClick={() => handleRestore(row)}
                        size="small"
                        color="primary"
                      >
                        <Restore />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <ConfirmButtonContainer
                      onClick={() => handleDeleteForever(row)}
                    >
                      <Tooltip title="Delete permentely">
                        <IconButton size="small" color="error">
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </ConfirmButtonContainer>
                  </Grid>
                </Grid>
              )
            : undefined
        }
        clickRowToEdit
      />

      <ModalContainer
        title="Document"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        okButtonLabel="Save"
        onOk={isView ? undefined : handleSave}
        maxWidth="lg"
      >
        <Box minHeight={"50vh"}>
          <DocumentDetail
            data={formData}
            onChange={setFormData}
            readOnly={isView}
          />
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default DocumentsList;
