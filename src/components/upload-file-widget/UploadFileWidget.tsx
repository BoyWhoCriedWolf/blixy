import { Box, Grid, TextField, Typography } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import { useState } from "react";
import UploadFileDropzone from "./UploadFileDropzone";
import UploadProgressCard from "./UploadProgressCard";
import { apiClient } from "utils/api-utils";
import { API_URLS } from "services/api-urls";
import { APIResponseType } from "services/types/response";
import { useSnackbar } from "notistack";

const UploadFileWidget = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const doUpload = async (file = selectedFile) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // axios
      //   .post('/upload', formData, {
      //     onUploadProgress: (progressEvent) => {
      //       const { loaded, total } = progressEvent;
      //       const percentCompleted = Math.round((loaded * 100) / total);
      //       setProgress(percentCompleted);
      //     },
      //   })
      //   .then((response: AxiosResponse) => {
      //     // Handle successful upload
      //   })
      //   .catch((error) => {
      //     // Handle upload error
      //   });

      setProgress(0);

      const ret: APIResponseType = await apiClient.post(
        API_URLS.DOCUMENT_UPLOAD,
        formData,
        {
          onUploadProgress: (progressEvent) => {
            const { loaded, total = 0 } = progressEvent;
            const percentCompleted = total
              ? Math.round((loaded * 100) / total)
              : 0;
            setProgress(percentCompleted);
          },
        }
      );

      console.log(ret);

      if (ret?.success) {
        enqueueSnackbar("Successfully Uploaded", { variant: "success" });
      } else {
        enqueueSnackbar("Successfully Uploaded", { variant: "success" });
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
            <Grid container spacing={1} alignItems={"center"}>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                <Typography fontWeight={"bold"} align="right">
                  Description
                </Typography>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={7}>
                <TextField size="small" fullWidth />
              </Grid>
            </Grid>
          </UploadProgressCard>
        </Box>
      </ModalContainer>
    </Box>
  );
};

export default UploadFileWidget;
