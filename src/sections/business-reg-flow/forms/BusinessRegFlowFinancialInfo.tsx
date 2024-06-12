import { Grid } from "@mui/material";
import AnimFinancial from "components/animations/AnimFinancial";
import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowFinancialInfo: FC<
  PropsWithChildren<{
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }>
> = ({ data, onChange }) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimFinancial />
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={6}
        xs={12}
        sx={{ maxHeight: "50vh", overflow: "auto" }}
      >
        <EditForm
          data={data}
          onChange={onChange}
          fields={[
            { displayName: "Bank Account Name", name: "bank_account_name" },
            { displayName: "Bank Account Number", name: "bank_account_number" },
            { displayName: "Bank Address", name: "bank_address" },
            {
              displayName: "Initial Capital",
              name: "bank_initial_capital",
              type: FieldType.Money,
            },
            { displayName: "Funding Sources", name: "bank_funding_sources" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowFinancialInfo;
