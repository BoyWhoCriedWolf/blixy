import { APP_NAME } from "constants/strings";
import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import imgLogo from "assets/img/logo/Logo.png";
import { Box, Typography } from "@mui/material";

const Logo: FC<PropsWithChildren<{ variant?: "chip" | "image" }>> = ({
  variant = "image",
}) => {
  return (
    <Link to="/">
      {variant === "image" ? (
        <img src={imgLogo} alt={APP_NAME} width={40} height={40} />
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src={imgLogo} alt={APP_NAME} width={24} height={24} />
          <Typography fontSize={18} fontWeight={500} lineHeight={"28px"}>
            {APP_NAME}
          </Typography>
        </Box>
      )}
    </Link>
  );
};

export default Logo;
