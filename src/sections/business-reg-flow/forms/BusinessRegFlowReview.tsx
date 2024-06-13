import { Grid } from "@mui/material";
import AnimReview from "components/animations/AnimReview";
import { FC, PropsWithChildren } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";
import BusinessRegFlowBusinessOperationsForm from "./BusinessRegFlowBusinessOperationsForm";
import BusinessRegFlowCompanyInfoForm from "./BusinessRegFlowCompanyInfoForm";
import BusinessRegFlowFinancialInfoForm from "./BusinessRegFlowFinancialInfoForm";
import BusinessRegFlowOwnerInfoForm from "./BusinessRegFlowOwnerInfoForm";
import BusinessRegFlowUserAgreementForm from "./BusinessRegFlowUserAgreementForm";

const BusinessRegFlowReview: FC<
  PropsWithChildren<{
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }>
> = ({ data, onChange }) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimReview />
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
          data={data}
          onChange={onChange}
          readOnly={true}
        />
        <BusinessRegFlowOwnerInfoForm
          data={data}
          onChange={onChange}
          readOnly={true}
        />
        <BusinessRegFlowBusinessOperationsForm
          data={data}
          onChange={onChange}
          readOnly={true}
        />
        <BusinessRegFlowFinancialInfoForm
          data={data}
          onChange={onChange}
          readOnly={true}
        />
        <BusinessRegFlowUserAgreementForm
          data={data}
          onChange={onChange}
          readOnly={true}
        />
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowReview;
