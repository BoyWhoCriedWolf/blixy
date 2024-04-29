export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? // ? "http://localhost:8000/api"
      "https://blixy-c5f054bd203d.herokuapp.com"
    : "https://blixy-c5f054bd203d.herokuapp.com";

export const API_URLS = {
  // auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  HEALTH_CHECK: "/auth/healthcheck",
  CHANGE_PASSWORD: "/auth/change-password",

  // documents
  DOCUMENT_UPLOAD: "/document/upload",
};
