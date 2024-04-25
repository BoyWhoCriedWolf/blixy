import { Help } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { FC, PropsWithChildren, ReactNode } from "react";

const IconCard: FC<
  PropsWithChildren<{ icon?: ReactNode; caption?: string }>
> = ({ icon = <Help />, caption = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontSize={50}
        sx={{
          borderRadius: 3,
          px: 3,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        {icon}
      </Typography>
      <Typography my={1}>{caption}</Typography>
    </Box>
  );
};

export default IconCard;
