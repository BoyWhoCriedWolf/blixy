import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const WorkFlowCard: FC<
  PropsWithChildren<{
    heading?: string;
    name?: string;
    date?: string;
    time?: string;
    total?: string;
    bgColor?: string;
    isArrow?: Boolean;
  }>
> = ({
  heading = "",
  name = "",
  date = "",
  time = "",
  total = "",
  bgColor = "",
  isArrow = "false",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
          minHeight: 170,
          justifyContent: "space-between",
        }}
      >
        <Typography fontWeight={500} mb={2}>
          {heading}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
          }}
        >
          <Typography>{name}</Typography>
          <Typography>{date}</Typography>
          <Typography>{time}</Typography>
        </Box>
        <Typography>{total}</Typography>
      </Box>
      {isArrow ? <ArrowRightAlt fontSize="large" /> : null}
    </Box>
  );
};

export default WorkFlowCard;
