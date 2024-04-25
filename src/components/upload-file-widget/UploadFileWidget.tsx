import { Box, Grid, TextField, Typography } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import { useState } from "react";
import UploadFileDropzone from "./UploadFileDropzone";
import UploadProgressCard from "./UploadProgressCard";

const UploadFileWidget = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const doUpload = (file = selectedFile) => {
    if (file) {
      // const formData = new FormData();
      // formData.append('file', file);

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

      const mockupProgress = () => {
        setProgress((s = 0) => {
          if (s < 100) {
            setTimeout(mockupProgress, 100);
            return Math.min(100, s + 3);
          }
          return 100;
        });
      };

      setProgress(0);
      mockupProgress();
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
