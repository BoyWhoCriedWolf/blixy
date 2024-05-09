import { Box } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import TableManagement from "components/table-management";
import { FC, PropsWithChildren, useState } from "react";
import documentService from "services/document.service";
import { Document } from "services/types/document.types";
import DocumentDetail from "../document-detail";
import PageLoading from "components/loading/page-loading";
import { useSnackbar } from "notistack";

const DocumentsList: FC<
  PropsWithChildren<{ onClick?: (v: Document) => void }>
> = ({ onClick = () => null }) => {
  const snb = useSnackbar();

  const [formData, setFormData] = useState<Document>({} as Document);
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const ret = await documentService.save({ data: formData });
    setIsLoading(false);
    if (ret.success) {
      setIsOpen(false);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown error", { variant: "warning" });
    }
  };

  return (
    <Box sx={{ minHeight: "100%" }}>
      <PageLoading open={isLoading} />

      <TableManagement<Document>
        apiService={documentService}
        columns={[
          { headerName: "Delivered", field: "delivered", flex: 1 },
          { headerName: "Employee", field: "employee", flex: 1 },
          { headerName: "TYPE", field: "doc_type", flex: 1 },
          { headerName: "Topic", field: "topic", flex: 1 },
          { headerName: "File Name", field: "file_name", flex: 1 },
          { headerName: "KB", field: "kb", flex: 1 },
          { headerName: "Vendor", field: "vendor", flex: 1 },
          { headerName: "Status", field: "status", flex: 1 },
          { headerName: "BLOCKED BY", field: "blocked_by", flex: 1 },
          { headerName: "IDR status", field: "idr_status", flex: 1 },
          { headerName: "Rcg", field: "rcg", flex: 1 },
          { headerName: "Information", field: "information", flex: 1 },
        ]}
        availableActions={["View", "Edit", "Delete"]}
        onEdit={handleEdit}
        onView={handleView}
      />

      <ModalContainer
        title="Document"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        okButtonLabel="Save"
        onOk={isView ? undefined : handleSave}
        maxWidth="lg"
      >
        <DocumentDetail data={formData} readOnly={isView} />
      </ModalContainer>
    </Box>
  );
};

export default DocumentsList;
