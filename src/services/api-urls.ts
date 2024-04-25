export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? // ? "http://localhost:8000/api"
      "https://blixy-c5f054bd203d.herokuapp.com"
    : "https://blixy-c5f054bd203d.herokuapp.com";

export const API_URLS = {
  // auth
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
  HEALTH_CHECK: "/healthcheck",
  CHANGE_PASSWORD: "/change-password",
};
