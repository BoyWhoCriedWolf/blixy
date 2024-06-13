import { Grid } from "@mui/material";
import AnimBusiness from "components/animations/AnimBusiness";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";
import BusinessRegFlowBusinessOperationsForm from "./BusinessRegFlowBusinessOperationsForm";

const BusinessRegFlowBusinessOperations = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
  }
>(({ data, onChange }, ref) => {
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
        <BusinessRegFlowBusinessOperationsForm
          ref={ref}
          data={data}
          onChange={onChange}
        />
      </Grid>
    </Grid>
  );
});

export default BusinessRegFlowBusinessOperations;
