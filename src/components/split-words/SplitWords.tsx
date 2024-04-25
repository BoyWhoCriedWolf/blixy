import { Box, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const SplitWords: FC<PropsWithChildren<{ name?: string; value?: number }>> = ({
  name = "",
  value = "",
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography fontWeight={500}>{name}</Typography>
      <Typography fontWeight={500}>{value}</Typography>
    </Box>
  );
};

export default SplitWords;
