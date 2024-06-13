import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import PageLoading from "components/loading/page-loading";
import { APP_NAME } from "constants/strings";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "services/auth.service";
import { APIResponseType } from "services/types/response.types";
import { isValidEmail } from "utils/string-utils";

const SignUp = () => {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
    source: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{
    code?: string | number;
    message?: string;
  }>({
    code: "",
    message: "",
  });

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

    if (name === "username") {
      setFormError((s) => ({
        ...s,
        username: value.length ? "" : "Please input user name",
      }));
    }

    if (name === "password") {
      setFormError((s) => ({
        ...s,
        password:
          value.length > 8
            ? ""
            : "Please input a password more than 8 characters",
      }));
    }

    if (name === "confirm_password") {
      setFormError((s) => ({
        ...s,
        confirm_password:
          value.length > 8
            ? value === formData?.password
              ? ""
              : "Confirm password is not match"
            : "Please input a password",
      }));
    }
  };

  const handleRegister = async () => {
    if (isValidForm) {
      setIsLoading(true);

      const ret = (await authService.register(formData)) as APIResponseType;
      setIsLoading(false);

      if (ret.success) {
        enqueueSnackbar("Registered successfully", { variant: "success" });
        navigate("/");
      } else {
        setError({ code: ret?.code, message: ret?.msg ?? "Unknown" });
      }
    } else {
      setFormError((s) => ({
        ...s,
        email: isValidEmail(formData?.email)
          ? ""
          : "Please input a valid email address",
        username: formData.username.length ? "" : "Please input user name",

        password:
          formData?.password.length > 8 ? "" : "Please input a password",
        confirm_password:
          formData.confirm_password.length > 8
            ? formData.confirm_password === formData?.password
              ? ""
              : "Confirm password is not match"
            : "Please input a password",
      }));
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  // const handleRegDetails = () => {
  //   navigate("/business-reg-flow");
  // };

  return (
    <Box>
      <Typography fontSize={36} fontWeight={500} align="center" mb={5}>
        Tell us about yourself
      </Typography>

      <PageLoading open={isLoading} />

      {error.message ? (
        <Box sx={{ mb: 2 }}>
          <Alert variant="outlined" color="error" title="Sign In failed">
            <b>{error.code}</b> {error.message}
          </Alert>
        </Box>
      ) : null}

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
        label="Username"
        name="username"
        value={formData?.username ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
        type="username"
        error={formError?.username.length > 0}
        helperText={formError.username ?? ""}
        sx={{ mb: 4.5 }}
      />
      <TextField
        label={`Where did you hear about ${APP_NAME}`}
        name="source"
        value={formData?.source ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
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
      <TextField
        label="Confirm Password"
        name="confirm_password"
        value={formData?.confirm_password ?? ""}
        onChange={handleChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
        type="password"
        error={formError?.confirm_password.length > 0}
        helperText={formError.confirm_password ?? ""}
        sx={{ mb: 4.5 }}
      />

      <Button
        onClick={handleRegister}
        color="warning"
        variant="contained"
        fullWidth
        sx={{ mb: 2 }}
      >
        Register
      </Button>

      {/* <Button
        onClick={handleRegDetails}
        color="primary"
        fullWidth
        sx={{ mb: 2 }}
      >
        Business Registration
      </Button> */}

      <Button onClick={handleLogin} color="primary" fullWidth>
        already have an account
      </Button>
    </Box>
  );
};

export default SignUp;
