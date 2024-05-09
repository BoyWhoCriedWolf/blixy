import { Delete, PictureAsPdf } from "@mui/icons-material";
import { Alert, Box, IconButton, Typography } from "@mui/material";
import ConfirmButtonContainer from "components/containers/confirm-button-container";
import LinearProgressWithLabel from "components/linear-progress-with-label";
import { FC, PropsWithChildren } from "react";

const UploadProgressCard: FC<
  PropsWithChildren<{ file?: File; progress?: number; onDelete?: () => void }>
> = ({ file = null, progress = 0, children, onDelete = () => null }) => {
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
              <Box>
                <Typography fontWeight={"bold"}>{file?.name}</Typography>
                <Typography>
                  200KB <i>Uploading</i>
                </Typography>
              </Box>
              <ConfirmButtonContainer onClick={onDelete}>
                <IconButton color="error" size="small">
                  <Delete />
                </IconButton>
              </ConfirmButtonContainer>
            </Box>
            <LinearProgressWithLabel value={progress} />
            {children ? (
              <Box
                sx={{
                  p: 2,
                  borderTop: 1,
                  borderColor: (th) => th?.palette?.divider,
                }}
              >
                {children}
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Alert color="warning">No file</Alert>
  );
};

export default UploadProgressCard;
