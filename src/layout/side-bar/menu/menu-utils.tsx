import {
  AccountBalance,
  AccountBox,
  AccountCircle,
  ArrowDownward,
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
  Inventory,
  IosShare,
  LocalAtm,
  Memory,
  NoAccounts,
  Payment,
  PermContactCalendar,
  PointOfSale,
  PriceChange,
  QrCodeScanner,
  ReceiptLong,
  Schema,
  ShoppingBasket,
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

  // backoffice
  {
    icon: <Business />,
    label: "Backoffice",
    children: [
      // Overview
      {
        label: "Overview",
        isLabel: true,
      },
      // workflow
      {
        icon: <Schema />,
        path: "/backoffice/workflow",
        label: "Backoffice workflow",
      },
      // Processed workflow
      {
        icon: <ReceiptLong />,
        path: "/backoffice/processed-workflow",
        label: "Processed workflow",
      },
      // Quality monitor
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
      // Tax filling
      {
        icon: <Stream />,
        path: "/backoffice/tax-filling",
        label: "Tax filling",
      },
      // Memorial
      {
        icon: <Memory />,
        path: "/backoffice/memorial",
        label: "Memorial",
      },
      // Exporting
      {
        icon: <IosShare />,
        path: "/backoffice/exporting",
        label: "Exporting",
      },
      // Importing
      {
        icon: <ArrowDownward />,
        path: "/backoffice/importing",
        label: "Importing",
      },
      // Chart of accounts
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
      // Bank
      {
        icon: <AccountBalance />,
        path: "/backoffice/bank",
        label: "Bank",
      },
      // Suspense accounts
      {
        icon: <NoAccounts />,
        path: "/backoffice/suspense-accounts",
        label: "Suspense accounts",
      },
      // Accounts receivable
      {
        icon: <AccountBox />,
        path: "/backoffice/accounts-receivable",
        label: "Accounts receivable",
      },
      // Accounts Payable
      {
        icon: <AccountCircle />,
        path: "/backoffice/accounts-payable",
        label: "Accounts Payable",
      },
      // Export
      {
        icon: <IosShare />,
        path: "/backoffice/export",
        label: "Export",
      },
      // Actions
      {
        icon: <SmartButton />,
        path: "/backoffice/actions",
        label: "Actions",
      },
      // OCR-Recognizition rules
      {
        icon: <QrCodeScanner />,
        path: "/backoffice/ocr-recog-rules",
        label: "OCR-Recognizition rules",
      },
      // Standard Values
      {
        icon: <Schema />,
        path: "/backoffice/standard-values",
        label: "Standard Values",
      },
      // Scan forms
      {
        icon: <Flip />,
        path: "/backoffice/scan-forms",
        label: "Scan forms",
      },
    ],
  },

  // Archive
  {
    icon: <Inventory />,
    label: "Archive",
    children: [
      // Documents
      // {
      //   icon: <Article />,
      //   path: "/archive/documents",
      //   label: "Documents",
      // },
      // Stored documents
      {
        icon: <DocumentScanner />,
        path: "/archive/stored-documents",
        label: "Stored documents",
      },
      // Recently viewed
      {
        icon: <WorkHistory />,
        path: "/archive/recently-viewed-documents",
        label: "Recently viewed",
      },
      // Deleted documents
      {
        icon: <FolderDelete />,
        path: "/archive/deleted-documents",
        label: "Deleted documents",
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
        path: "/bank/accounts",
        label: "Bank accounts",
      },
      // Processed transactions
      {
        icon: <ReceiptLong />,
        path: "/bank/processed-transactions",
        label: "Processed transactions",
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
        path: "/bank/export-transactions",
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
        path: "/profit-loss",
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
      // Accounts Receivable
      {
        icon: <AccountBox />,
        path: "#",
        label: "Accounts Receivable",
      },
      // Accounts Payable
      {
        icon: <AccountCircle />,
        path: "#",
        label: "Accounts Payable",
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
        path: "/accounting/chart",
        label: "Chart of accounts",
      },
      {
        icon: <ArrowDownward />,
        path: "#",
        label: "Import",
      },
      {
        icon: <LocalAtm />,
        path: "/accounting/taxes",
        label: "Taxes",
      },
    ],
  },

  // Purchase
  {
    icon: <ShoppingBasket />,
    label: "Purchase",
    path: "#",
  },

  // Sale
  {
    icon: <PointOfSale />,
    label: "Sale",
    path: "#",
  },

  // Contacts
  {
    icon: <PermContactCalendar />,
    label: "Contacts",
    path: "/contacts",
  },
] as Array<MenuDataType>;
