import {
  AccountBalance,
  AccountBox,
  AccountCircle,
  ArrowDownward,
  Article,
  AttachMoney,
  BarChart,
  Business,
  Construction,
  ContactEmergency,
  DocumentScanner,
  FilePresent,
  Flip,
  FolderDelete,
  HighQuality,
  Home,
  IosShare,
  LocalAtm,
  Memory,
  NoAccounts,
  Payment,
  PriceChange,
  QrCodeScanner,
  ReceiptLong,
  Schema,
  SmartButton,
  Stream,
  SupervisorAccount,
  WorkHistory,
} from "@mui/icons-material";
import { ReactNode } from "react";

export type MenuDataType = {
  icon?: ReactNode;
  label?: string;
  isLabel?: boolean;
  path?: string;
  children?: Array<MenuDataType>;
};

export const MENU_DATA = [
  {
    icon: <Home />,
    path: "/home",
    label: "Home",
  },
  {
    icon: <Business />,
    label: "Backoffice",
    children: [
      // Overview
      {
        label: "Overview",
        isLabel: true,
      },
      {
        icon: <Schema />,
        path: "/backoffice/workflow",
        label: "Backoffice workflow",
      },
      {
        icon: <ReceiptLong />,
        path: "/backoffice/processed-transactions",
        label: "Processed transactions",
      },
      {
        icon: <HighQuality />,
        path: "/backoffice/quality-monitor",
        label: "Quality monitor",
      },

      // Actions
      {
        label: "Actions",
        isLabel: true,
      },
      {
        icon: <Stream />,
        path: "/backoffice/tax-filling",
        label: "Tax filling",
      },
      {
        icon: <Memory />,
        path: "/backoffice/memorial",
        label: "Memorial",
      },
      {
        icon: <IosShare />,
        path: "/backoffice/exporting",
        label: "Exporting",
      },
      {
        icon: <ArrowDownward />,
        path: "/backoffice/importing",
        label: "Importing",
      },
      {
        icon: <BarChart />,
        path: "/backoffice/accounts-chart",
        label: "Chart of accounts",
      },

      // Checklist
      {
        label: "Checklist",
        isLabel: true,
      },
      {
        icon: <AccountBalance />,
        path: "/backoffice/bank",
        label: "Bank",
      },
      {
        icon: <NoAccounts />,
        path: "/backoffice/suspense-accounts",
        label: "Suspense accounts",
      },
      {
        icon: <AccountBox />,
        path: "/backoffice/debtors",
        label: "Debtors",
      },
      {
        icon: <AccountCircle />,
        path: "/backoffice/creditors",
        label: "Creditors",
      },
      {
        icon: <Article />,
        path: "/backoffice/documents",
        label: "Documents",
      },
      {
        icon: <DocumentScanner />,
        path: "/backoffice/stored-documents",
        label: "Stored documents",
      },
      {
        icon: <WorkHistory />,
        path: "/backoffice/recently-viewed-documents",
        label: "Recently viewed",
      },
      {
        icon: <FolderDelete />,
        path: "/backoffice/deleted-documents",
        label: "Deleted documents",
      },
      {
        icon: <IosShare />,
        path: "/backoffice/export",
        label: "Export",
      },
      {
        icon: <SmartButton />,
        path: "/backoffice/actions",
        label: "Actions",
      },
      {
        icon: <QrCodeScanner />,
        path: "/backoffice/ocr-recog-rules",
        label: "OCR-Recognizition rules",
      },
      {
        icon: <Schema />,
        path: "/backoffice/workflow-rules",
        label: "Workflow rules",
      },
      {
        icon: <Flip />,
        path: "/backoffice/scan-forms",
        label: "Scan forms",
      },
    ],
  },

  // Bank
  {
    icon: <AccountBalance />,
    label: "Bank",
    children: [
      {
        icon: <ContactEmergency />,
        path: "#",
        label: "Bank accounts",
      },
      {
        icon: <LocalAtm />,
        path: "#",
        label: "Cash",
      },
      {
        icon: <PriceChange />,
        path: "#",
        label: "Payment list",
      },
      {
        icon: <IosShare />,
        path: "#",
        label: "Export transactions",
      },
      {
        icon: <QrCodeScanner />,
        path: "#",
        label: "Recognition rules",
      },
    ],
  },

  // Accounting
  {
    icon: <SupervisorAccount />,
    label: "Accounting",
    children: [
      // Overview
      {
        label: "Overview",
        isLabel: true,
      },
      {
        icon: <Payment />,
        path: "#",
        label: "Financial key indicators",
      },
      {
        icon: <AttachMoney />,
        path: "#",
        label: "Profit loss account",
      },
      {
        icon: <Construction />,
        path: "#",
        label: "Trial balance sheet",
      },
      {
        icon: <FilePresent />,
        path: "#",
        label: "Assets",
      },
      {
        icon: <AccountBox />,
        path: "#",
        label: "Debtors",
      },
      {
        icon: <AccountCircle />,
        path: "#",
        label: "Creditors",
      },
      {
        icon: <Memory />,
        path: "#",
        label: "Memorial",
      },

      // Actions
      {
        label: "Actions",
        isLabel: true,
      },
      {
        icon: <IosShare />,
        path: "/accounting/export",
        label: "Export",
      },
      {
        icon: <BarChart />,
        path: "#",
        label: "Chart of accounts",
      },
      {
        icon: <ArrowDownward />,
        path: "#",
        label: "Import",
      },
      {
        icon: <LocalAtm />,
        path: "#",
        label: "Taxes",
      },
    ],
  },
] as Array<MenuDataType>;
