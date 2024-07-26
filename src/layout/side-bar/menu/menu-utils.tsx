import {
  AccountBalance,
  AccountBox,
  AccountCircle,
  ArrowDownward,
  AttachMoney,
  BarChart,
  Build,
  Business,
  Construction,
  ContactEmergency,
  CurrencyExchange,
  DocumentScanner,
  FilePresent,
  FolderDelete,
  HighQuality,
  Home,
  Inventory,
  IosShare,
  Language,
  LocalAtm,
  Memory,
  Money,
  Payment,
  PermContactCalendar,
  Person,
  PointOfSale,
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
      // // Exporting
      // {
      //   icon: <IosShare />,
      //   path: "/backoffice/exporting",
      //   label: "Exporting",
      // },
      // // Importing
      // {
      //   icon: <ArrowDownward />,
      //   path: "/backoffice/importing",
      //   label: "Importing",
      // },
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
      // // Bank
      // {
      //   icon: <AccountBalance />,
      //   path: "/backoffice/bank",
      //   label: "Bank",
      // },
      // // Suspense accounts
      // {
      //   icon: <NoAccounts />,
      //   path: "/backoffice/suspense-accounts",
      //   label: "Suspense accounts",
      // },
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
      // // Scan forms
      // {
      //   icon: <Flip />,
      //   path: "/backoffice/scan-forms",
      //   label: "Scan forms",
      // },
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
      // // Processed transactions
      // {
      //   icon: <ReceiptLong />,
      //   path: "/bank/processed-transactions",
      //   label: "Processed transactions",
      // },
      // // Cash
      // {
      //   icon: <LocalAtm />,
      //   path: "#",
      //   label: "Cash",
      // },
      // // Payment list
      // {
      //   icon: <PriceChange />,
      //   path: "#",
      //   label: "Payment list",
      // },
      // Export transactions
      {
        icon: <IosShare />,
        path: "/bank/export-transactions",
        label: "Export transactions",
      },
      // Bank Automatic Rules
      {
        icon: <QrCodeScanner />,
        path: "#",
        label: "Bank Automatic Rules",
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
        path: "/accounting/profit-loss",
        label: "Profit loss account",
      },
      {
        icon: <Construction />,
        path: "/accounting/trial-sheet",
        label: "Trial balance sheet",
      },
      {
        icon: <Construction />,
        path: "/accounting/balance-sheet",
        label: "Balance sheet",
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

  // Settings
  {
    icon: <SupervisorAccount />,
    label: "Settings",
    children: [
      // // Overview
      // {
      //   label: "Overview",
      //   isLabel: true,
      // },
      // User/Roles Registration
      {
        icon: <Person />,
        path: "#",
        label: "User/Roles Registration",
      },
      // Taxes
      {
        icon: <Money />,
        path: "#",
        label: "Taxes",
      },
      // Ponto bank integration
      {
        icon: <Build />,
        path: "#",
        label: "Ponto bank integration",
      },
      // Currencies
      {
        icon: <CurrencyExchange />,
        path: "#",
        label: "Currencies",
      },
      // Country's
      {
        icon: <Language />,
        path: "#",
        label: "Country's",
      },
    ],
  },
] as Array<MenuDataType>;
