import { Grid } from "@mui/material";
import AnimBuildings from "components/animations/AnimBuildings";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";
import BusinessRegFlowCompanyInfoForm from "./BusinessRegFlowCompanyInfoForm";

type BusinessRegFlowCompanyInfoProps = {
  data?: Administration;
  onChange?: DispatchFunction<Administration>;
};

const BusinessRegFlowCompanyInfo = forwardRef<
  EditFormRefType<Administration>,
  BusinessRegFlowCompanyInfoProps
>(({ data, onChange }, ref) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimBuildings />
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        sm={6}
        xs={12}
        sx={{ maxHeight: "50vh", overflow: "auto" }}
      >
        <BusinessRegFlowCompanyInfoForm
          ref={ref}
          data={data}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowCompanyInfo;
