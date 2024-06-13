import { Grid } from "@mui/material";
import AnimUserAgreement from "components/animations/AnimUserAgreement";
import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowUserAgreement = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }
>(({ data, onChange }, ref) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimUserAgreement />
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
            { displayName: "Terms and Conditions", name: "terms_conditions" },
            { displayName: "Privacy Policy", name: "privacy_policy" },

            {
              displayName: "Consent for Data Usage",
              name: "consent_data_usage",
              type: FieldType.Checkbox,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowUserAgreement;
