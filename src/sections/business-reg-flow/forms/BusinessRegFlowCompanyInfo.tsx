import { Grid } from "@mui/material";
import AminBuildings from "components/animations/AminBuildings";
import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowCompanyInfo: FC<
  PropsWithChildren<{
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }>
> = ({ data, onChange }) => {
  return (
    <Grid container>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AminBuildings />
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
            { displayName: "Company Name", name: "company_name" },
            { displayName: "Trade Name", name: "company_trade_name" },
            {
              displayName: "Business Type",
              name: "company_business_type",
              type: FieldType.Choice,
              options: [
                "Sole propietorship",
                "Partnership",
                "Corporation",
                "LLC",
              ],
            },
            { displayName: "Industry", name: "company_industry" },
            {
              displayName: "Business Description",
              name: "company_business_description",
            },

            {
              displayName: "Business Address",
              name: "company_business_address",
            },
            { displayName: "Mailing Address", name: "company_mailing_address" },
            { displayName: "Phone Number", name: "company_phone_number" },
            { displayName: "Email Address", name: "company_email" },

            {
              displayName: "Registration Number",
              name: "company_registration_number",
            },
            { displayName: "Tax Identification Number", name: "company_tin" },
            { displayName: "VAT Number", name: "company_vat" },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default BusinessRegFlowCompanyInfo;
