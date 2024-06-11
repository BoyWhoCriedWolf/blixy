import { Box, Container } from "@mui/material";
import imgAuthBack from "assets/img/backgrounds/auth-back.png";
import Logo from "components/logo";
import { FC, PropsWithChildren } from "react";

const AuthBackContainer: FC<PropsWithChildren<{ title?: string }>> = ({
  title = "",
  children,
}) => {
  return (
    <Box
      sx={{
        background: `url(${imgAuthBack})`,
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
        backgroundPosition: "fixed",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        position: "relative",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            p: 6,
            borderColor: (th) => th.palette.divider,
            border: 1,
            borderRadius: 2,
            background: (th) => th.palette.background.default,
          }}
        >
          {children}
        </Box>
      </Container>

      <Box
        sx={{
          position: "fixed",
          bottom: 42,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Logo variant="chip" />
      </Box>
    </Box>
  );
};

export default AuthBackContainer;
