import { Grid } from "@mui/material";
import AnimBuildings from "components/animations/AnimBuildings";
import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldRequiredType, FieldType } from "types/ui-types";

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
        <EditForm
          ref={ref}
          data={data}
          onChange={onChange}
          fields={[
            {
              displayName: "Company Name",
              name: "company_name",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Trade Name",
              name: "company_trade_name",
              required: FieldRequiredType.Required,
            },
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
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Industry",
              name: "company_industry",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Business Description",
              name: "company_business_description",
              required: FieldRequiredType.Required,
            },

            {
              displayName: "Business Address",
              name: "company_business_address",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Mailing Address",
              name: "company_mailing_address",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Phone Number",
              name: "company_phone_number",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Email Address",
              name: "company_email",
              required: FieldRequiredType.Required,
            },

            {
              displayName: "Registration Number",
              name: "company_registration_number",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "Tax Identification Number",
              name: "company_tin",
              required: FieldRequiredType.Required,
            },
            {
              displayName: "VAT Number",
              name: "company_vat",
              required: FieldRequiredType.Required,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowCompanyInfo;
