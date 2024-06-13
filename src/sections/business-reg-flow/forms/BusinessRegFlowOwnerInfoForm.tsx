import EditForm from "components/edit-form";
import { EditFormRefType } from "components/edit-form/EditForm";
import { forwardRef } from "react";
import { Administration } from "services/types/administration.types";
import { DispatchFunction } from "types/ui-types";

const BusinessRegFlowOwnerInfoForm = forwardRef<
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
      readOnly={readOnly}
    />
  );
});

export default BusinessRegFlowOwnerInfoForm;
