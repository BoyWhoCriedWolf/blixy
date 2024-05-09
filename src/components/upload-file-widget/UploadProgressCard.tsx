import { Delete, PictureAsPdf } from "@mui/icons-material";
import { Alert, Box, IconButton, Typography } from "@mui/material";
import ConfirmButtonContainer from "components/containers/confirm-button-container";
import LinearProgressWithLabel from "components/linear-progress-with-label";
import { FC, PropsWithChildren } from "react";

const UploadProgressCard: FC<
  PropsWithChildren<{ file?: File; progress?: number; onDelete?: () => void }>
> = ({ file = null, progress = 0, children, onDelete = () => null }) => {
  const fileSize = Math.floor((file?.size ?? 0) / 1000);

  return file ? (
    <Box
      sx={{
        border: 1,
        borderColor: (th) => th?.palette?.divider,
        borderRadius: 1,
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: 1,
          borderColor: (th) => th?.palette?.divider,
        }}
      >
        <Box display={"flex"}>
          <Box width={60}>
            <PictureAsPdf color="error" sx={{ fontSize: 48 }} />
          </Box>
          <Box flexGrow={1}>
            <Box mb={2} display={"flex"} justifyContent={"space-between"}>
              <Box mb={-1}>
                <Typography fontWeight={"bold"}>{file?.name}</Typography>
                <Typography>
                  {progress > 0 ? (
                    <>
                      {Math.floor((fileSize * progress) / 100)} KB / {fileSize}{" "}
                      KB <i>Uploading</i>
                    </>
                  ) : progress >= 100 ? (
                    <>
                      {fileSize} KB <b>Uploaded</b>
                    </>
                  ) : (
                    `${fileSize} KB`
                  )}
                </Typography>
              </Box>
              <ConfirmButtonContainer onClick={onDelete}>
                <IconButton color="error" size="small">
                  <Delete />
                </IconButton>
              </ConfirmButtonContainer>
            </Box>
            <LinearProgressWithLabel value={progress} />
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Alert color="warning">No file</Alert>
  );
};

export default UploadProgressCard;
