import { Grid } from "@mui/material";
import AnimClient from "components/animations/AnimClient";
import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";

const BusinessRegFlowOwnerInfo: FC<
  PropsWithChildren<{
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }>
> = ({ data, onChange }) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimClient />
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
            { displayName: "Full Name", name: "owner_full_name" },
            { displayName: "Position", name: "owner_position" },

            {
              displayName: "Owner Address",
              name: "owner_business_address",
            },
            { displayName: "Mailing Address", name: "owner_mailing_address" },
            { displayName: "Phone Number", name: "owner_phone_number" },
            { displayName: "Email Address", name: "owner_email" },

            {
              displayName: "Registration Number",
              name: "owner_registration_number",
            },
            { displayName: "Tax Identification Number", name: "owner_tin" },
            { displayName: "VAT Number", name: "owner_vat" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowOwnerInfo;
