import { Box, Button, TextField, Typography } from "@mui/material";
import PageLoading from "components/loading/page-loading";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "services/auth-service";
import { UserInfo } from "services/types/user";
import { setAuthUser } from "store/slices/auth-slice";
import { setAuthorization } from "utils/api-utils";
import { isValidEmail } from "utils/string-utils";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const isValidForm =
    Object.values(formError).join("").length === 0 &&
    Object.values(formData).join("").length > 0;

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name = "", value = "" } = event?.target ?? {};

    setFormData((s) => ({ ...(s ?? {}), [name]: value }));
  };

  const handleBlur: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { name = "", value = "" } = event?.target ?? {};

    if (name === "email") {
      setFormError((s) => ({
        ...s,
        email: isValidEmail(value) ? "" : "Please input a valid email address",
      }));
    }

    if (name === "password") {
      setFormError((s) => ({
        ...s,
        password: value.length > 8 ? "" : "Please input a password",
      }));
    }
  };

  const handleLogin = async () => {
    if (isValidForm) {
      setIsLoading(true);

      const ret = (await authService.login(formData)) as UserInfo;
      console.log(ret);
      setIsLoading(false);

      dispatch(setAuthUser(ret));

      if (ret.access_token) {
        setAuthorization(ret.access_token);
      }
    } else {
      setFormError((s) => ({
        ...s,
        email: isValidEmail(formData?.email)
          ? ""
          : "Please input a valid email address",
        password:
          formData?.password.length > 8 ? "" : "Please input a password",
      }));
    }
  };

  const handleRegister = () => {
    navigate("/sign-up");
  };

  return (
    <Box>
      <Typography fontSize={36} fontWeight={500} align="center" mb={5}>
        Sign In
      </Typography>

      <PageLoading open={isLoading} />

      <TextField
        label="Email"
        name="email"
        value={formData?.email ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
        type="email"
        error={formError?.email.length > 0}
        helperText={formError.email ?? ""}
        sx={{ mb: 4.5 }}
      />
      <TextField
        label="Password"
        name="password"
        value={formData?.password ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
        type="password"
        error={formError?.password.length > 0}
        helperText={formError.password ?? ""}
        sx={{ mb: 4.5 }}
      />

      <Button
        onClick={handleLogin}
        color="warning"
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
      >
        Login
      </Button>

      <Button onClick={handleRegister} color="primary" fullWidth>
        Don't you have an account?
      </Button>
    </Box>
  );
};

export default SignIn;
