import { Box, Button, Grid, Slider, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

const BusinessRegFlowFormLayout: FC<
  PropsWithChildren<{
    onNext?: () => void;
    onBefore?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    title?: string;
    count?: number;
    index?: number;
  }>
> = ({
  onNext = () => null,
  onBefore = () => null,
  children,
  isFirst = false,
  isLast = false,
  title = "",
  count = 1,
  index = 1,
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

      <Slider
        value={index}
        max={count}
        step={1}
        marks
        getAriaLabel={(value) => `Step ${value}`}
      />

      <Box sx={{ mb: 2 }}>{children}</Box>

      <Button
        onClick={onNext}
        color="warning"
        variant="contained"
        disabled={isLast}
        fullWidth
        sx={{ mb: 1 }}
      >
        Next
      </Button>

      <Grid container justifyContent={"space-between"} alignItems={"center"}>
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
      </Grid>
    </Box>
  );
};

export default BusinessRegFlowFormLayout;
