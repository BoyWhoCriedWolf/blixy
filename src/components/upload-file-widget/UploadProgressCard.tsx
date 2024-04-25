import { Delete, PictureAsPdf } from "@mui/icons-material";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinearProgressWithLabel from "components/linear-progress-with-label";
import { FC, PropsWithChildren } from "react";

const UploadProgressCard: FC<PropsWithChildren<{ progress?: number }>> = ({
  progress = 0,
  children,
}) => {
  return (
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
                <Typography fontWeight={"bold"}>Bank Statement</Typography>
                <Typography>
                  200KB <i>Uploading</i>
                </Typography>
              </Box>
              <IconButton size="small">
                <Delete />
              </IconButton>
            </Box>
            <LinearProgressWithLabel value={progress} />
          </Box>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item lg={5} md={5} sm={5} xs={5}>
            <Typography fontWeight={"bold"} align="right">
              File type:
            </Typography>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={7}>
            <Typography>PDF document</Typography>
          </Grid>
        </Grid>
      </Box>
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
  );
};

export default UploadProgressCard;
