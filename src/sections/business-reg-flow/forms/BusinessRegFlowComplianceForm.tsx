import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";

const BusinessRegFlowComplianceForm = forwardRef<
  EditFormRefType<Administration>,
  {
    data?: Administration;
    onChange?: DispatchFunction<Administration>;
    readOnly?: boolean;
  }
>(({ data, onChange, readOnly }, ref) => {
  return (
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
      readOnly={readOnly}
    />
  );
});

export default BusinessRegFlowComplianceForm;
