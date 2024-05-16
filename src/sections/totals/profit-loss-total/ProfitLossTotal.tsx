import { Box } from "@mui/material";
import CollapseBox from "components/containers/collapse-box";
import PageLoading from "components/loading/page-loading";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { GeneralLedgerAccountDocumentTotal } from "services/types/general.ledger.account.types";
import { currencyFormatter } from "utils/number-utils";

const ProfitLossTotal = () => {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<GeneralLedgerAccountDocumentTotal>();

  const loadData = async () => {
    setIsLoading(true);
    const ret = await generalLedgerAccountService.totalProfitLoss();
    setIsLoading(false);

    if (ret.success) {
      setData(ret.data);
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown Error", { variant: "warning" });
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      <PageLoading open={isLoading} />
      {data
        ? Object.keys(data).map((accountType, accountTypeIndex) => {
            const accountTypeContent = data[accountType];

            return (
              <CollapseBox
                title={accountType}
                key={accountTypeIndex}
                secondaryTitle={currencyFormatter(
                  accountTypeContent.total_amount
                )}
              >
                {accountTypeContent?.accounts?.map((account, accountIndex) => {
                  const documents = account?.documents ?? [];
                  const total = documents.reduce(
                    (ret, cur) => ret + (cur.amount ?? 0),
                    0
                  );

                  return (
                    <CollapseBox
                      key={accountIndex}
                      title={account.description ?? ""}
                      secondaryTitle={currencyFormatter(total)}
                    >
                      {documents.map((document, documentIndex) => {
                        return (
                          <CollapseBox
                            key={documentIndex}
                            title={document.description ?? ""}
                            secondaryTitle={currencyFormatter(document.amount)}
                          >
                            {/* <DocumentDetail
                                    data={document}
                                    noNavigation
                                    readOnly
                                  /> */}
                          </CollapseBox>
                        );
                      })}
                    </CollapseBox>
                  );
                })}
              </CollapseBox>
            );
          })
        : null}
    </Box>
  );
};

export default ProfitLossTotal;
