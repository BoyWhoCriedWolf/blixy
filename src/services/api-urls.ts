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
  DOCUMENT_GET: "/document/get",
  DOCUMENT_UPDATE: "/document/update",
  DOCUMENT_DELETE: "/document/delete",
  DOCUMENT_RESTORE: "/document/restore",
  DOCUMENT_DELETE_FOREVER: "/document/delete-forever",

  // contacts
  CONTACT_CREATE: "/contact/create",
  CONTACT_UPDATE: "/contact/update",
  CONTACT_DELETE: "/contact/delete",
  CONTACT_GETS: "/contact/list",
  CONTACT_GET: "/contact/get",

  // general ledger account
  GENERAL_LEDGER_ACCOUNT_CREATE: "/general-ledger-account/create",
  GENERAL_LEDGER_ACCOUNT_UPDATE: "/general-ledger-account/update",
  GENERAL_LEDGER_ACCOUNT_DELETE: "/general-ledger-account/delete",
  GENERAL_LEDGER_ACCOUNT_GETS: "/general-ledger-account/list",
  GENERAL_LEDGER_ACCOUNT_GET: "/general-ledger-account/get",
  GENERAL_LEDGER_ACCOUNT_TOTAL_PROFIT_LOSS: "/general-ledger-account/total-profit-loss",

  // tax
  TAX_CREATE: "/tax/create",
  TAX_UPDATE: "/tax/update",
  TAX_DELETE: "/tax/delete",
  TAX_GETS: "/tax/list",
  TAX_GET: "/tax/get",
};
