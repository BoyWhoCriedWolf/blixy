import { Box, Button, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

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
  return (
    <Box>
      {title ? (
        <Typography fontSize={36} fontWeight={500} align="center" mb={5}>
          {title}
        </Typography>
      ) : null}

      {children}

      <Button
        onClick={onNext}
        color="warning"
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
        disabled={isLast}
      >
        Next
      </Button>

      <Button onClick={onBefore} color="primary" disabled={isFirst} fullWidth>
        Before
      </Button>
    </Box>
  );
};

export default BusinessRegFlowFormLayout;
