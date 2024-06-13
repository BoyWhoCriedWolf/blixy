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
    submitIndex?: number;
    onSubmit?: () => void;
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
  submitIndex,
  onSubmit = () => null,
}) => {
  const navigate = useNavigate();

  const isSubmit = index === submitIndex;

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
        onClick={isSubmit ? onSubmit : onNext}
        color="warning"
        variant="contained"
        disabled={isLast}
        fullWidth
        sx={{ mb: 1 }}
      >
        {isSubmit ? "Submit" : "Next"}
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
