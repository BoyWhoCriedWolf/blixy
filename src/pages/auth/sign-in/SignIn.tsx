import { Box, Typography } from "@mui/material";
import SignInPanel from "./SignInPanel";

const SignIn = () => {
  return (
    <Box>
      <Typography fontSize={36} fontWeight={500} align="center" mb={5}>
        Sign In
      </Typography>
      <SignInPanel />
    </Box>
  );
};

export default SignIn;
