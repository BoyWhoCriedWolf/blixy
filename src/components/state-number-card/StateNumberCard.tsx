import { Box, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const StateNumberCard: FC<
  PropsWithChildren<{
    label?: string;
    value?: string | number;
    caption?: string;
  }>
> = ({ label = "", value = "", caption = "" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-around",
        alignItems: "center",
        p: 1,
        cursor: "pointer",

        ":hover": { background: (th) => th?.palette?.background?.default },
      }}
    >
      <Typography>{label}</Typography>
      <Typography color="primary" sx={{ fontSize: 40, fontWeight: 800 }}>
        {value}
      </Typography>
      <Typography variant="caption">{caption}</Typography>
    </Box>
  );
};
export default StateNumberCard;
