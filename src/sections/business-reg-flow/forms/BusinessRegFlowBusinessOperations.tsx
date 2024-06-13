import { Grid } from "@mui/material";
import AnimBusiness from "components/animations/AnimBusiness";
import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowBusinessOperations = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }
>(({ data, onChange }) => {
  return (
    <Grid container alignItems={"center"}>
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <AnimBusiness />
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
            {
              displayName: "Operational Start Date",
              name: "operation_start_date",
              type: FieldType.DateOnly,
            },
            {
              displayName: "Fiscal Year End",
              name: "operation_fiscal_end_year",
              type: FieldType.DateOnly,
            },

            {
              displayName: "Accounting Method",
              name: "operation_accounting_method",
              type: FieldType.Choice,
              options: ["Cash basis", "Accrual basis"],
            },
            {
              displayName: "Business Activities",
              name: "operation_business_activities",
              type: FieldType.MultiLineText,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowBusinessOperations;
