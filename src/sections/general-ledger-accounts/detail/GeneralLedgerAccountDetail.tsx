import React, { FC, PropsWithChildren } from "react";
import ApprovedDocumentsList from "sections/documents/documents-list/ApprovedDocumentsList";

const GeneralLedgerAccountDetail: FC<
  PropsWithChildren<{ accountId?: string }>
> = ({ accountId = "" }) => {
  return (
    <div>
      <ApprovedDocumentsList general_ledger_account_id={accountId} />
    </div>
  );
};

export default GeneralLedgerAccountDetail;
