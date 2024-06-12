import { Box, Button, Grid, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const BusinessRegFlowFormLayout: FC<
  PropsWithChildren<{
    onNext?: () => void;
    onBefore?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    title?: string;
  }>
> = ({
  onNext = () => null,
  onBefore = () => null,
  children,
  isFirst = false,
  isLast = false,
  title = "",
}) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box>
      {title ? (
        <Typography fontSize={36} fontWeight={500} align="center" mb={5}>
          {title}
        </Typography>
      ) : null}

      <Box sx={{ maxHeight: "50vh", overflow: "auto", mb: 2 }}>{children}</Box>

      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
      >
        <Grid item>
          <Button onClick={onBefore} color="primary" disabled={isFirst}>
            Before
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={handleCancel} color="error">
            Cancel
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={onNext}
            color="warning"
            variant="contained"
            disabled={isLast}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BusinessRegFlowFormLayout;
