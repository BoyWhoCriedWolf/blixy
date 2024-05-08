import { Box, Grid, Stack, Typography } from "@mui/material";
import LoaderContainer from "components/loading/loader-container";
import StateNumberCard from "components/state-number-card";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import documentService from "services/document.service";
import { DocumentType } from "services/types/document.types";
import { Counts } from "types/ui-types";

const BackofficeWorkflowCount = () => {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Counts>({});

  const loadData = async () => {
    setIsLoading(true);
    const ret = await documentService.getCounts();
    setIsLoading(false);

    if (ret.success) {
      setData(ret.data ?? {});
    } else {
      snb.enqueueSnackbar(ret.msg ?? "Unknown", { variant: "warning" });
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoaderContainer open={isLoading}>
      <Stack>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Backoffice workflow
          </Typography>
          <Grid container spacing={1}>
            {[
              { label: "Document", value: data?.all ?? 0, caption: "4 days" },
              {
                label: "Bank",
                value: data?.[DocumentType.BANK_STATEMENT] ?? 0,
                caption: "2 days",
              },
            ].map((item, itemIndex) => {
              return (
                <Grid key={itemIndex} item lg={2} md={2} sm={3} xs={3}>
                  <StateNumberCard
                    caption={item?.caption ?? ""}
                    value={item?.value ?? ""}
                    label={item?.label ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Need attention
          </Typography>
          <Grid container spacing={1}>
            {[
              {
                label: "Bank",
                value: data?.[DocumentType.BANK_STATEMENT] ?? 0,
                caption: "Incidents",
              },
              {
                label: "Purchase",
                value: data?.[DocumentType.PURCHASE_INVOICE] ?? 0,
                caption: "Missing documents",
              },
              {
                label: "Sale",
                value: data?.[DocumentType.SALES_INVOICE] ?? 0,
                caption: "Missing documents",
              },
            ].map((item, itemIndex) => {
              return (
                <Grid key={itemIndex} item lg={2} md={2} sm={3} xs={3}>
                  <StateNumberCard
                    caption={item?.caption ?? ""}
                    value={item?.value ?? ""}
                    label={item?.label ?? ""}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </LoaderContainer>
  );
};

export default BackofficeWorkflowCount;
