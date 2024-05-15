import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import EditForm from "components/edit-form";
import LoaderContainer from "components/loading/loader-container";
import PageLoading from "components/loading/page-loading";
import PageHeading from "components/typography/page-heading";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApprovedDocumentsList from "sections/documents/documents-list/ApprovedDocumentsList";
import generalLedgerAccountService from "services/general.ledger.account.service";
import {
  GeneralLedgerAccount,
  GeneralLedgerAccountType,
} from "services/types/general.ledger.account.types";
import { FieldType } from "types/ui-types";

const enum AccountTransactionType {
  AllTransactions = "All Transactions",
  BalanceSheetAccounts = "Balance sheet Accounts", // Assets, Liability
  ProfitLossAccounts = "Profit Loss Accounts", // transactions
}

const GeneralLedgerAccountDetail: FC<
  PropsWithChildren<{ accountId?: string }>
> = ({ accountId = "" }) => {
  const navigate = useNavigate();
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GeneralLedgerAccount>();
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [list, setList] = useState<Array<GeneralLedgerAccount>>([]);
  const [filterFormData, setFilterFormData] = useState({
    type: AccountTransactionType.AllTransactions,
  });

  const currentIndex = useMemo(
    () => list.findIndex((item) => item.id === data?.id),
    [data?.id, list]
  );
  const isLastOfList = currentIndex === list.length - 1;

  const loadList = async () => {
    setIsLoadingList(true);
    const ret = await generalLedgerAccountService.gets();
    setIsLoadingList(false);
    if (ret.success) {
      setList(ret.data ?? []);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const ret = await generalLedgerAccountService.get({ id: accountId });
    setIsLoading(false);

    if (ret.success) {
      setData((ret.data ?? {}) as GeneralLedgerAccount);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  const handleNext = async () => {
    const destId = list[currentIndex + 1]?.id;
    if (destId) {
      navigate(`/backoffice/accounts-chart/${destId}`);
    }
  };

  const handleBefore = async () => {
    const destId = list[currentIndex - 1]?.id;
    if (destId) {
      navigate(`/backoffice/accounts-chart/${destId}`);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId]);

  useEffect(() => {
    loadList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageLoading open={isLoading} />
      <PageHeading
        actions={
          <LoaderContainer open={isLoadingList}>
            <Grid container alignItems={"center"}>
              <Grid item>
                <EditForm
                  data={filterFormData}
                  onChange={setFilterFormData}
                  fields={[
                    {
                      displayName: "Type",
                      name: "type",
                      type: FieldType.Choice,
                      options: [
                        AccountTransactionType.AllTransactions,
                        AccountTransactionType.BalanceSheetAccounts,
                        AccountTransactionType.ProfitLossAccounts,
                      ],
                    },
                  ]}
                />
              </Grid>
              <Grid item>
                <IconButton
                  onClick={handleBefore}
                  color="inherit"
                  disabled={!currentIndex}
                >
                  <NavigateBefore />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  onClick={handleNext}
                  color="inherit"
                  disabled={isLastOfList}
                >
                  <NavigateNext />
                </IconButton>
              </Grid>
            </Grid>
          </LoaderContainer>
        }
      >
        {data?.description ?? ""}: {filterFormData.type ?? ""}
      </PageHeading>
      <ApprovedDocumentsList
        general_ledger_account_id={accountId}
        generalLedgerAccount={data}
        general_ledger_account_types={
          filterFormData.type === AccountTransactionType.AllTransactions
            ? undefined
            : filterFormData.type ===
              AccountTransactionType.BalanceSheetAccounts
            ? [
                GeneralLedgerAccountType.Assets,
                GeneralLedgerAccountType.Liabilities,
              ]
            : filterFormData.type === AccountTransactionType.ProfitLossAccounts
            ? [
                GeneralLedgerAccountType.Revenue,
                GeneralLedgerAccountType.Costs,
                GeneralLedgerAccountType.Taxes,
                GeneralLedgerAccountType.FinancialIncomeExpenses,
              ]
            : undefined
        }
      />
    </div>
  );
};

export default GeneralLedgerAccountDetail;
