// https://blixy-api-4f5a90c98117.herokuapp.com/static/page.html

export const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? // ? "http://localhost:8000/api"
      "https://blixy-api-4f5a90c98117.herokuapp.com"
    : "https://blixy-api-4f5a90c98117.herokuapp.com";

export const API_URLS = {
  // auth
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  HEALTH_CHECK: "/auth/healthcheck",
  CHANGE_PASSWORD: "/auth/change-password",

  // documents
  DOCUMENT_UPLOAD: "/document/upload",
  DOCUMENT_GETS: "/document/list",
  DOCUMENT_GET_COUNTS: "/document/counts",
  DOCUMENT_GET: "/document/list",

  // contacts
  CONTACT_CREATE: "/contact/create",
  CONTACT_UPDATE: "/contact/update",
  CONTACT_DELETE: "/contact/delete",
  CONTACT_GETS: "/contact/list",
  CONTACT_GET: "/contact/get",
};
