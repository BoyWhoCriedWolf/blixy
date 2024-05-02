import Layout from "layout";
import AccountingExport from "pages/accounting/export";
import AccountingLayout from "pages/accounting/layout";
import AuthLayout from "pages/auth/auth-layout";
import SignIn from "pages/auth/sign-in";
import SignUp from "pages/auth/sign-up";

import AccountingImport from "pages/accounting/import";
import ArchiveDocuments from "pages/archive/documents";
import ArchiveDeletedDocuments from "pages/archive/documents/deleted-documents";
import ArchiveDocumentDetail from "pages/archive/documents/document-detail";
import ArchiveDocumentsList from "pages/archive/documents/documents-list";
import ArchiveRecentlyViewedDocuments from "pages/archive/documents/recently-viewed-documents";
import ArchiveStoredDocuments from "pages/archive/documents/stored-documents";
import ArchiveLayout from "pages/archive/layout";
import BackofficeAccountsChartPage from "pages/backoffice/actions/accounts-chart";
import BackofficeExportingPage from "pages/backoffice/actions/exporting";
import BackofficeImportingPage from "pages/backoffice/actions/importing";
import BackofficeMemorialPage from "pages/backoffice/actions/memorial";
import BackofficeTaxFillingPage from "pages/backoffice/actions/tax-filling";
import BackofficeAccountsPayable from "pages/backoffice/checklist/accounts-payable";
import BackofficeAccountsReceivable from "pages/backoffice/checklist/accounts-receivable";
import BackofficeActions from "pages/backoffice/checklist/actions";
import BackofficeBank from "pages/backoffice/checklist/bank";
import BackofficeExport from "pages/backoffice/checklist/export";
import BackofficeOcrRecogRules from "pages/backoffice/checklist/ocr-recog-rules";
import BackofficeScanForms from "pages/backoffice/checklist/scan-forms";
import BackofficeSuspenseAccounts from "pages/backoffice/checklist/suspense-accounts";
import BackofficeWorkflowRules from "pages/backoffice/checklist/workflow-rules";
import BackofficeLayout from "pages/backoffice/layout";
import BackofficeProcessedWorkflow from "pages/backoffice/overview/processed-workflow";
import BackofficeQualityMonitor from "pages/backoffice/overview/quality-monitor";
import BackofficeWorkflow from "pages/backoffice/overview/workflow";
import BankAccountsPage from "pages/bank/accounts";
import BankLayout from "pages/bank/layout";
import BankProcessedTransactionsPage from "pages/bank/processed-transactions";

import BankExportTransactionsPage from "pages/bank/export-transactions";
import Dashboard from "pages/dashboard";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Contacts } from "@mui/icons-material";

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
          <Route index element={<BackofficeWorkflow />} />
          <Route path="workflow" element={<BackofficeWorkflow />} />
          <Route
            path="processed-workflow"
            element={<BackofficeProcessedWorkflow />}
          />
          <Route
            path="quality-monitor"
            element={<BackofficeQualityMonitor />}
          />
          <Route path="tax-filling" element={<BackofficeTaxFillingPage />} />
          <Route path="memorial" element={<BackofficeMemorialPage />} />
          <Route path="exporting" element={<BackofficeExportingPage />} />
          <Route path="importing" element={<BackofficeImportingPage />} />
          <Route
            path="accounts-chart"
            element={<BackofficeAccountsChartPage />}
          />
          <Route path="bank" element={<BackofficeBank />} />
          <Route
            path="suspense-accounts"
            element={<BackofficeSuspenseAccounts />}
          />
          <Route
            path="accounts-receivable"
            element={<BackofficeAccountsReceivable />}
          />
          <Route
            path="accounts-payable"
            element={<BackofficeAccountsPayable />}
          />
          <Route path="export" element={<BackofficeExport />} />
          <Route path="actions" element={<BackofficeActions />} />
          <Route path="ocr-recog-rules" element={<BackofficeOcrRecogRules />} />
          <Route path="workflow-rules" element={<BackofficeWorkflowRules />} />
          <Route path="scan-forms" element={<BackofficeScanForms />} />
        </Route>

        {/* archive */}
        <Route path="/archive" element={<ArchiveLayout />}>
          <Route path="documents" element={<ArchiveDocuments />} />
          <Route path="documents-list" element={<ArchiveDocumentsList />} />
          <Route path="document/:id" element={<ArchiveDocumentDetail />} />
          <Route path="stored-documents" element={<ArchiveStoredDocuments />} />
          <Route
            path="recently-viewed-documents"
            element={<ArchiveRecentlyViewedDocuments />}
          />
          <Route
            path="deleted-documents"
            element={<ArchiveDeletedDocuments />}
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
          <Route index element={<AccountingExport />} />
          <Route path="export" element={<AccountingExport />} />
          <Route path="import" element={<AccountingImport />} />
        </Route>

        {/* accounting */}
        <Route path="/contacts" element={<Contacts />}></Route>
      </Route>
    </Route>
  )
);
