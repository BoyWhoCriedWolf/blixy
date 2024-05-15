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
            const totalDocumentTypes = data[accountType];

            return (
              <CollapseBox title={accountType} key={accountTypeIndex}>
                {totalDocumentTypes
                  ? Object.keys(totalDocumentTypes).map(
                      (documentType, documentTypeIndex) => {
                        const documents =
                          totalDocumentTypes?.[documentType]?.documents ?? [];
                        const total =
                          totalDocumentTypes?.[documentType]?.total_amount ?? 0;

                        return (
                          <CollapseBox
                            key={documentTypeIndex}
                            title={documentType} secondaryTitle={currencyFormatter(total)}
                          >
                            {documents.map((document, documentIndex) => {
                              return (
                                <CollapseBox
                                  key={documentIndex}
                                  title={document.description ?? ""}
                                  secondaryTitle={currencyFormatter(
                                    document.amount
                                  )}
                                ></CollapseBox>
                              );
                            })}
                          </CollapseBox>
                        );
                      }
                    )
                  : null}
              </CollapseBox>
            );
          })
        : null}
    </Box>
  );
};

export default ProfitLossTotal;
