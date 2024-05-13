import PageLoading from "components/loading/page-loading";
import PageHeading from "components/typography/page-heading";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import ApprovedDocumentsList from "sections/documents/documents-list/ApprovedDocumentsList";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { GeneralLedgerAccount } from "services/types/general.ledger.account.types";

const GeneralLedgerAccountDetail: FC<
  PropsWithChildren<{ accountId?: string }>
> = ({ accountId = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GeneralLedgerAccount>();

  const loadData = async () => {
    setIsLoading(true);
    const ret = await generalLedgerAccountService.get({ id: accountId });
    setIsLoading(false);

    if (ret.success) {
      setData((ret.data ?? {}) as GeneralLedgerAccount);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId]);

  return (
    <div>
      <PageLoading open={isLoading} />
      <PageHeading>{data?.description ?? ""}: All transactions</PageHeading>
      <ApprovedDocumentsList
        general_ledger_account_id={accountId}
        generalLedgerAccount={data}
      />
    </div>
  );
};

export default GeneralLedgerAccountDetail;
