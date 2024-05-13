import { Tooltip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import IconBankStatement from "components/custom-icons/IconBankStatement";
import IconGeneralDocument from "components/custom-icons/IconGeneralDocument";
import IconPurchaseInvoice from "components/custom-icons/IconPurchaseInvoice";
import IconSalesInvoice from "components/custom-icons/IconSalesInvoice";
import TableManagement from "components/table-management";
import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import documentService from "services/document.service";
import { Document, DocumentType } from "services/types/document.types";
import { ymd2dmy } from "utils/datetime-utils";
import { currencyFormatter } from "utils/number-utils";

const ApprovedDocumentsList: FC<
  PropsWithChildren<{ general_ledger_account_id?: string }>
> = ({ general_ledger_account_id = "" }) => {
  const navigate = useNavigate();

  const handleView = (value: Document) => {
    if (value?.id) {
      navigate(`${value?.id}`);
    }
  };

  return (
    <TableManagement<Document>
      apiService={documentService}
      filter={{
        approved: true,
        ...(general_ledger_account_id ? { general_ledger_account_id } : {}),
      }}
      columns={[
        {
          headerName: "Date",
          field: "document_date",
          renderCell: (p: GridRenderCellParams<Document>) =>
            ymd2dmy(p.row.document_date),
        },
        { headerName: "Description", field: "description" },
        { headerName: "Invoice #", field: "invoice" },
        {
          headerName: "Type",
          field: "doc_type",
          align: "center",
          renderCell: (p: GridRenderCellParams<Document>) =>
            p.row.doc_type === DocumentType.BankStatement ? (
              <Tooltip placement="right" title="Bank Statement">
                <div>
                  <IconBankStatement />
                </div>
              </Tooltip>
            ) : p.row.doc_type === DocumentType.Standard ? (
              <Tooltip placement="right" title="Standard">
                <div>
                  <IconGeneralDocument />
                </div>
              </Tooltip>
            ) : p.row.doc_type === DocumentType.PurchaseInvoice ? (
              <Tooltip placement="right" title="Purchase Invoice">
                <div>
                  <IconPurchaseInvoice />
                </div>
              </Tooltip>
            ) : p.row.doc_type === DocumentType.SalesInvoice ? (
              <Tooltip placement="right" title="Sales Invoice">
                <div>
                  <IconSalesInvoice />
                </div>
              </Tooltip>
            ) : null,
        },
        {
          headerName: "Amount",
          field: "amount",
          renderCell: (p: GridRenderCellParams<Document>) =>
            currencyFormatter(p?.row?.amount),
        },
        {
          headerName: "Contact",
          field: "contact_id",
          renderCell: (p: GridRenderCellParams<Document>) =>
            p?.row?.contact?.description ?? "",
        },
      ]}
      availableActions={["View"]}
      onView={handleView}
      hideFooterPagination
    />
  );
};

export default ApprovedDocumentsList;
