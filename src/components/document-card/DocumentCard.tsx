import { Add } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactNode } from "react";

const DocumentCard: FC<
  PropsWithChildren<{
    label?: string;
    icon?: ReactNode;
    data?: Array<string>;
    onClick?: () => void;
  }>
> = ({ label = "", icon = <Add />, data = [], onClick = () => null }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Paper sx={{ minHeight: 280, cursor: "pointer" }} onClick={handleClick}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Typography fontSize={20} fontWeight={600}>
          {label}
        </Typography>
        <Typography sx={{ mt: 1 }}>{icon}</Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        {data.map((item, itemIndex) => {
          return (
            <Typography key={itemIndex} fontWeight={400}>
              {item ?? ""}
            </Typography>
          );
        })}
      </Box>
    </Paper>
  );
};

export default DocumentCard;
