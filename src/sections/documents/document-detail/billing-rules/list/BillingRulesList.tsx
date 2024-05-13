import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import React, { FC, PropsWithChildren } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { BillingRule } from "services/types/billing.rule.types";
import { Document } from "services/types/document.types";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";
import { FieldType } from "types/ui-types";
import { joinStrings } from "utils/string-utils";

const BillingRulesList: FC<
  PropsWithChildren<{ document?: Document; readOnly?: boolean }>
> = ({ document, readOnly = false }) => {
  return (
    <TableManagement<BillingRule>
      readOnly={readOnly}
      pageTitle=""
      title="Billing Rule"
      columns={[
        { headerName: "Description", field: "description" },
        {
          headerName: "General Ledger Account",
          field: "general_ledger_account_id",
          renderCell: (p: GridRenderCellParams<BillingRule>) =>
            joinStrings(
              " ",
              p?.row?.general_ledger_account?.code,
              p?.row?.general_ledger_account?.description
            ),
        },
        { headerName: "Amount excl. VAT", field: "amount_excl_vat" },
      ]}
      fields={[
        {
          displayName: "Description",
          name: "description",
          type: FieldType.Text,
        },
        {
          displayName: "General Ledger Account",
          name: "general_ledger_account_id",
          type: FieldType.Choice,
          getOptions: async () => {
            const ret = await generalLedgerAccountService.gets();
            if (ret.success) {
              return ret.data ?? [];
            }
            return [];
          },
          getOptionLabel: (option?: GeneralLedgerAccount) =>
            joinStrings(" ", option?.code, option?.description),
          getOptionValue: (option?: GeneralLedgerAccount) => option?.id ?? "",
          joinedFieldName: "general_ledger_account",
        },
        {
          displayName: "Amount excl. VAT",
          name: "amount_excl_vat",
          secondaryName: "amount_excl_vat_currency",
          type: FieldType.Money,
        },
      ]}
      formatData={(v: Array<BillingRule>) => [
        ...(v ?? []),
        {
          general_ledger_account: { description: "Total incl. VAT" },
          amount_excl_vat: v.reduce(
            (ret, cur) => ret + (cur.amount_excl_vat ?? 0),
            0
          ),
          disableAction: true,
        },
        {
          general_ledger_account: { description: "Invoice amount" },
          amount_excl_vat: v.reduce(
            (ret, cur) => ret + (cur.amount_excl_vat ?? 0),
            0
          ),
          disableAction: true,
        },
      ]}
      hideFooterPagination
      enableMockup
    />
  );
};

export default BillingRulesList;
