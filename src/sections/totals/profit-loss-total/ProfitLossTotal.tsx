import { Box } from "@mui/material";
import PageLoading from "components/loading/page-loading";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import generalLedgerAccountService from "services/general.ledger.account.service";
import { Total } from "types/ui-types";

const ProfitLossTotal = () => {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Total>();

  const loadData = async () => {
    setIsLoading(false);
    const ret = await generalLedgerAccountService.total();
    setIsLoading(true);

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
      {JSON.stringify(data)}
    </Box>
  );
};

export default ProfitLossTotal;
