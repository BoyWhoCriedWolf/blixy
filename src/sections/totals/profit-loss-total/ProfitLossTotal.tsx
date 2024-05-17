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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      <CollapseBox title="Profit" secondaryTitle={currencyFormatter("")}>
        <CollapseBox
          title="Gross Margin"
          secondaryTitle={currencyFormatter("")}
        >
          <CollapseBox
            title="Net Revenue"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
          <CollapseBox
            title="Cost of Goods Sold"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
        </CollapseBox>
        <CollapseBox
          title="Operation Expenses"
          secondaryTitle={currencyFormatter("")}
        >
          <CollapseBox
            title="Personal Costs"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
          <CollapseBox
            title="Car Expenses"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
          <CollapseBox
            title="Sales Costs"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
          <CollapseBox
            title="Other Operating Expenses"
            secondaryTitle={currencyFormatter("")}
          ></CollapseBox>
        </CollapseBox>
      </CollapseBox>
    </Box>
  );
};

export default ProfitLossTotal;
