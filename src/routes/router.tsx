import Layout from "layout";
import AccountingExportPage from "pages/accounting/export";
import AccountingLayout from "pages/accounting/layout";
import AuthLayout from "pages/auth/auth-layout";
import SignIn from "pages/auth/sign-in";
import SignUp from "pages/auth/sign-up";

import AccountingImportPage from "pages/accounting/import";
import ArchiveDocumentsPage from "pages/archive/documents";
import ArchiveDeletedDocumentsPage from "pages/archive/documents/deleted-documents";
import ArchiveDocumentDetailPage from "pages/archive/documents/document-detail";
import ArchiveDocumentsListPage from "pages/archive/documents/documents-list";
import ArchiveRecentlyViewedDocumentsPage from "pages/archive/documents/recently-viewed-documents";
import ArchiveStoredDocumentsPage from "pages/archive/documents/stored-documents";
import ArchiveLayout from "pages/archive/layout";
import BackofficeAccountsChartPage from "pages/backoffice/actions/accounts-chart";
import BackofficeExportingPage from "pages/backoffice/actions/exporting";
import BackofficeImportingPage from "pages/backoffice/actions/importing";
import BackofficeMemorialPage from "pages/backoffice/actions/memorial";
import BackofficeTaxFillingPage from "pages/backoffice/actions/tax-filling";
import BackofficeAccountsPayablePage from "pages/backoffice/checklist/accounts-payable";
import BackofficeAccountsReceivablePage from "pages/backoffice/checklist/accounts-receivable";
import BackofficeActionsPage from "pages/backoffice/checklist/actions";
import BackofficeBankPage from "pages/backoffice/checklist/bank";
import BackofficeExportPage from "pages/backoffice/checklist/export";
import BackofficeOcrRecogRulesPage from "pages/backoffice/checklist/ocr-recog-rules";
import BackofficeScanFormsPage from "pages/backoffice/checklist/scan-forms";
import BackofficeSuspenseAccountsPage from "pages/backoffice/checklist/suspense-accounts";
import BackofficeWorkflowRulesPage from "pages/backoffice/checklist/workflow-rules";
import BackofficeLayout from "pages/backoffice/layout";
import BackofficeProcessedWorkflowPage from "pages/backoffice/overview/processed-workflow";
import BackofficeQualityMonitorPage from "pages/backoffice/overview/quality-monitor";
import BackofficeWorkflowPage from "pages/backoffice/overview/workflow";
import BankAccountsPage from "pages/bank/accounts";
import BankLayout from "pages/bank/layout";
import BankProcessedTransactionsPage from "pages/bank/processed-transactions";

import BankExportTransactionsPage from "pages/bank/export-transactions";
import ContactsPage from "pages/contacts";
import Dashboard from "pages/dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Auth Routes */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>

      {/* Private Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />

        {/* backoffice */}
        <Route path="/backoffice" element={<BackofficeLayout />}>
          <Route index element={<BackofficeWorkflowPage />} />
          <Route path="workflow" element={<BackofficeWorkflowPage />} />
          <Route
            path="processed-workflow"
            element={<BackofficeProcessedWorkflowPage />}
          />
          <Route
            path="quality-monitor"
            element={<BackofficeQualityMonitorPage />}
          />
          <Route path="tax-filling" element={<BackofficeTaxFillingPage />} />
          <Route path="memorial" element={<BackofficeMemorialPage />} />
          <Route path="exporting" element={<BackofficeExportingPage />} />
          <Route path="importing" element={<BackofficeImportingPage />} />
          <Route
            path="accounts-chart"
            element={<BackofficeAccountsChartPage />}
          />
          <Route path="bank" element={<BackofficeBankPage />} />
          <Route
            path="suspense-accounts"
            element={<BackofficeSuspenseAccountsPage />}
          />
          <Route
            path="accounts-receivable"
            element={<BackofficeAccountsReceivablePage />}
          />
          <Route
            path="accounts-payable"
            element={<BackofficeAccountsPayablePage />}
          />
          <Route path="export" element={<BackofficeExportPage />} />
          <Route path="actions" element={<BackofficeActionsPage />} />
          <Route
            path="ocr-recog-rules"
            element={<BackofficeOcrRecogRulesPage />}
          />
          <Route
            path="workflow-rules"
            element={<BackofficeWorkflowRulesPage />}
          />
          <Route path="scan-forms" element={<BackofficeScanFormsPage />} />
        </Route>

        {/* archive */}
        <Route path="/archive" element={<ArchiveLayout />}>
          <Route path="documents" element={<ArchiveDocumentsPage />} />
          <Route path="documents-list" element={<ArchiveDocumentsListPage />} />
          <Route path="document/:id" element={<ArchiveDocumentDetailPage />} />
          <Route
            path="stored-documents"
            element={<ArchiveStoredDocumentsPage />}
          />
          <Route
            path="recently-viewed-documents"
            element={<ArchiveRecentlyViewedDocumentsPage />}
          />
          <Route
            path="deleted-documents"
            element={<ArchiveDeletedDocumentsPage />}
          />
        </Route>

        {/* bank */}
        <Route path="/bank" element={<BankLayout />}>
          <Route path="accounts" element={<BankAccountsPage />} />
          <Route
            path="processed-transactions"
            element={<BankProcessedTransactionsPage />}
          />
          <Route
            path="export-transactions"
            element={<BankExportTransactionsPage />}
          />
        </Route>

        {/* accounting */}
        <Route path="/accounting" element={<AccountingLayout />}>
          <Route index element={<AccountingExportPage />} />
          <Route path="export" element={<AccountingExportPage />} />
          <Route path="import" element={<AccountingImportPage />} />
        </Route>

        {/* accounting */}
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Route>
    </Route>
  )
);
