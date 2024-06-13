import { Grid } from "@mui/material";
import AnimCompliance from "components/animations/AnimCompliance";
import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";

const BusinessRegFlowCompliance = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }
>(({ data, onChange }, ref) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimCompliance />
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
          ref={ref}
          data={data}
          onChange={onChange}
          fields={[
            {
              displayName: "Licenses and Permits",
              name: "compliance_licenses",
            },
            {
              displayName: "Insurance Information",
              name: "compliance_insurance",
            },
            {
              displayName: "Compliance Certifications",
              name: "compliance_certifications",
            },
          ]}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowCompliance;
