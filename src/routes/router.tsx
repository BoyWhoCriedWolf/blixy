import Layout from "layout";
import AccountingExport from "pages/accounting/export";
import AccountingLayout from "pages/accounting/layout";
import AuthLayout from "pages/auth/auth-layout";
import SignIn from "pages/auth/sign-in";
import SignUp from "pages/auth/sign-up";

import BackofficeAccountsChart from "pages/backoffice/actions/accounts-chart";
import BackofficeExporting from "pages/backoffice/actions/exporting";
import BackofficeImporting from "pages/backoffice/actions/importing";
import BackofficeMemorial from "pages/backoffice/actions/memorial";
import BackofficeTaxFilling from "pages/backoffice/actions/tax-filling";
import BackofficeActions from "pages/backoffice/checklist/actions";
import BackofficeBank from "pages/backoffice/checklist/bank";
import BackofficeCreditors from "pages/backoffice/checklist/creditors";
import BackofficeDebtors from "pages/backoffice/checklist/debtors";
import BackofficeDocuments from "pages/backoffice/checklist/documents";
import BackofficeDeletedDocuments from "pages/backoffice/checklist/documents/deleted-documents";
import BackofficeDocumentDetail from "pages/backoffice/checklist/documents/document-detail";
import BackofficeRecentlyViewedDocuments from "pages/backoffice/checklist/documents/recently-viewed-documents";
import BackofficeStoredDocuments from "pages/backoffice/checklist/documents/stored-documents";
import BackofficeExport from "pages/backoffice/checklist/export";
import BackofficeOcrRecogRules from "pages/backoffice/checklist/ocr-recog-rules";
import BackofficeScanForms from "pages/backoffice/checklist/scan-forms";
import BackofficeSuspenseAccounts from "pages/backoffice/checklist/suspense-accounts";
import BackofficeWorkflowRules from "pages/backoffice/checklist/workflow-rules";
import BackofficeLayout from "pages/backoffice/layout";
import BackofficeProcessedTransactions from "pages/backoffice/overview/processed-transactions";
import BackofficeQualityMonitor from "pages/backoffice/overview/quality-monitor";
import BackofficeWorkflow from "pages/backoffice/overview/workflow";

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
          <Route index element={<BackofficeWorkflow />} />
          <Route path="workflow" element={<BackofficeWorkflow />} />
          <Route
            path="processed-transactions"
            element={<BackofficeProcessedTransactions />}
          />
          <Route
            path="quality-monitor"
            element={<BackofficeQualityMonitor />}
          />
          <Route path="tax-filling" element={<BackofficeTaxFilling />} />
          <Route path="memorial" element={<BackofficeMemorial />} />
          <Route path="exporting" element={<BackofficeExporting />} />
          <Route path="importing" element={<BackofficeImporting />} />
          <Route path="accounts-chart" element={<BackofficeAccountsChart />} />
          <Route path="bank" element={<BackofficeBank />} />
          <Route
            path="suspense-accounts"
            element={<BackofficeSuspenseAccounts />}
          />
          <Route path="debtors" element={<BackofficeDebtors />} />
          <Route path="creditors" element={<BackofficeCreditors />} />
          <Route path="documents" element={<BackofficeDocuments />} />
          <Route path="document/:id" element={<BackofficeDocumentDetail />} />
          <Route
            path="stored-documents"
            element={<BackofficeStoredDocuments />}
          />
          <Route
            path="recently-viewed-documents"
            element={<BackofficeRecentlyViewedDocuments />}
          />
          <Route
            path="deleted-documents"
            element={<BackofficeDeletedDocuments />}
          />
          <Route path="export" element={<BackofficeExport />} />
          <Route path="actions" element={<BackofficeActions />} />
          <Route path="ocr-recog-rules" element={<BackofficeOcrRecogRules />} />
          <Route path="workflow-rules" element={<BackofficeWorkflowRules />} />
          <Route path="scan-forms" element={<BackofficeScanForms />} />
        </Route>

        {/* accounting */}
        <Route path="/accounting" element={<AccountingLayout />}>
          <Route index element={<AccountingExport />} />
          <Route path="export" element={<AccountingExport />} />
        </Route>
      </Route>
    </Route>
  )
);
