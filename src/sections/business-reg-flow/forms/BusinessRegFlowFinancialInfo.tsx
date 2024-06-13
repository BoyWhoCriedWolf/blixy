import { Grid } from "@mui/material";
import AnimFinancial from "components/animations/AnimFinancial";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";
import BusinessRegFlowFinancialInfoForm from "./BusinessRegFlowFinancialInfoForm";

const BusinessRegFlowFinancialInfo = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }
>(({ data, onChange }, ref) => {
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
        <BusinessRegFlowFinancialInfoForm
          ref={ref}
          data={data}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowFinancialInfo;
