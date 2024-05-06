import { Typography } from "@mui/material";
import TableManagement from "components/table-management";
import { FC, PropsWithChildren } from "react";
import { DOCUMENT_TYPES, Document } from "services/types/document.types";
import { FieldType, GeneralOption } from "types/ui-types";

const StandardValuesList: FC<PropsWithChildren> = () => {
  return (
    <TableManagement<Document>
      columns={[
        // input
        { headerName: "Document Type", field: "document_type" },
        { headerName: "Relation", field: "relation" },
        { headerName: "OCR", field: "OCR" },
        { headerName: "Amount", field: "amount" },

        // out put
        {
          headerName: "General Ledger Account",
          field: "general_ledger_account",
        },
        { headerName: "Btw Code", field: "btw_code" },
        { headerName: "Payment Method", field: "payment_method" },
        { headerName: "Linked UBL Rules", field: "linked_ubl_rules" },
        { headerName: "Processing", field: "processing" },
      ]}
      fields={[
        // input
        {
          type: FieldType.Custom,
          render: <Typography fontWeight={"bold"}>Output</Typography>,
        },
        {
          displayName: "Document Type",
          name: "document_type",
          type: FieldType.Choice,
          options: DOCUMENT_TYPES,
          getOptionLabel: (option: GeneralOption) => option?.name ?? "",
          getOptionValue: (option: GeneralOption) => option?.value ?? "",
        },
        { displayName: "Relation", name: "relation", type: FieldType.Text },
        {
          displayName: "Administration",
          name: "administration",
          type: FieldType.Text,
        },
        // {
        //   displayName: "Priority",
        //   name: "priority",
        //   type: FieldType.Choice,
        //   options: ["1 - important"],
        // },
        {
          displayName: "Start Date",
          name: "start_date",
          type: FieldType.DateOnly,
          lg: 6,
          md: 6,
          sm: 6,
          xs: 6,
        },
        {
          displayName: "End Date",
          name: "end_date",
          type: FieldType.DateOnly,
          lg: 6,
          md: 6,
          sm: 6,
          xs: 6,
        },
        { displayName: "Amount", name: "amount", type: FieldType.Money },
        { displayName: "OCR", name: "OCR", type: FieldType.Text },

        // out put
        {
          type: FieldType.Custom,
          render: <Typography fontWeight={"bold"}>Output</Typography>,
        },
        {
          displayName: "General Ledger Account",
          name: "general_ledger_account",
          type: FieldType.Text,
        },
        {
          displayName: "Btw Code",
          name: "btw_code",
          type: FieldType.Choice,
          options: ["Geen"],
        },
        {
          displayName: "Payment Method",
          name: "payment_method",
          type: FieldType.Choice,
          options: ["Geen"],
        },
        {
          displayName: "Payment Period",
          name: "payment_method",
          type: FieldType.Text,
        },
        // {
        //   displayName: "Linked UBL Rules",
        //   name: "linked_ubl_rules",
        //   type: FieldType.Text,
        // },
        { displayName: "Processing", name: "processing", type: FieldType.Text },
      ]}
    />
  );
};

export default StandardValuesList;
