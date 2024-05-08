import { Box, Grid, Stack, Typography } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import LoaderContainer from "components/loading/loader-container";
import StateNumberCard from "components/state-number-card";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import DocumentsList from "sections/documents/documents-list";
import documentService from "services/document.service";
import { DocumentType } from "services/types/document.types";
import { Counts } from "types/ui-types";

const BackofficeWorkflowCount = () => {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Counts>({});
  const [isOpen, setIsOpen] = useState(false);

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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoaderContainer open={isLoading}>
      <Stack>
        <ModalContainer
          title={"Document to be processed"}
          isOpen={isOpen}
          onClose={handleClose}
          maxWidth="lg"
        >
          <DocumentsList />
        </ModalContainer>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Backoffice workflow
          </Typography>
          <Grid container spacing={1}>
            <Grid item lg={2} md={2} sm={3} xs={3} onClick={handleOpen}>
              <StateNumberCard
                label={"Document"}
                caption={"4 days"}
                value={data?.all ?? 0}
              />
            </Grid>
            <Grid item lg={2} md={2} sm={3} xs={3}>
              <StateNumberCard
                label={"Bank"}
                caption={"2 days"}
                value={data?.[DocumentType.BANK_STATEMENT] ?? 0}
              />
            </Grid>
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
