import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const BusinessRegFlowUserAgreementForm = forwardRef<
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
        { displayName: "Terms and Conditions", name: "terms_conditions" },
        { displayName: "Privacy Policy", name: "privacy_policy" },

        {
          displayName: "Consent for Data Usage",
          name: "consent_data_usage",
          type: FieldType.Checkbox,
        },
      ]}
      readOnly={readOnly}
    />
  );
});

export default BusinessRegFlowUserAgreementForm;
