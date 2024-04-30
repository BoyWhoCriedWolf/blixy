import { Box } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import EditForm from "components/edit-form";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useState } from "react";
import { API_URLS } from "services/api-urls";
import { APIResponseType } from "services/types/response";
import { apiClient } from "utils/api-utils";
import UploadFileDropzone from "./UploadFileDropzone";
import UploadProgressCard from "./UploadProgressCard";

const UploadFileWidget: FC<
  PropsWithChildren<{ onUploaded?: (v?: any) => void }>
> = ({ onUploaded = () => null }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({ description: "" });

  const doUpload = async (file = selectedFile) => {
    if (file) {
      const submitData = new FormData();
      submitData.append("file", file);
      submitData.append("description", formData.description);

      setProgress(0);

      const ret: APIResponseType = await apiClient.post(
        API_URLS.DOCUMENT_UPLOAD,
        submitData,
        {
          onUploadProgress: (progressEvent) => {
            const { loaded, total = 0 } = progressEvent;
            const percentCompleted = total
              ? Math.round((loaded * 100) / total)
              : 0;
            setProgress(percentCompleted);
          },

          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (ret?.success) {
        enqueueSnackbar("Successfully Uploaded", { variant: "success" });
        onUploaded(ret?.data);
        setIsOpen(false);
      } else {
        enqueueSnackbar(ret?.msg || "Unknown", { variant: "warning" });
      }
    }
  };

  const handleSelectFile = (v: File) => {
    setSelectedFile(v);
    setIsOpen(true);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <UploadFileDropzone onSelectFile={handleSelectFile} />

      <ModalContainer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="File Uploading"
        okButtonLabel="Submit"
        onOk={() => doUpload()}
      >
        <Box>
          <UploadProgressCard progress={progress}>
            <EditForm<{ description: string }>
              data={formData}
              onChange={setFormData}
              fields={[{ displayName: "Description" }]}
            />
          </UploadProgressCard>
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default UploadFileWidget;
