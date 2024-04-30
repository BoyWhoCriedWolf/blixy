import { Box } from "@mui/material";
import EditForm from "components/edit-form";
import { FieldType } from "types/ui-types";

const DocumentDetailContactDetailsForm = () => {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <EditForm
          lg={6}
          md={6}
          sm={12}
          xs={12}
          fields={[
            // Contact Type
            {
              displayName: "Contact Type",
              name: "contact_type",
              type: FieldType.Choice,
              isLabel: true,
              options: [
                "Contact Type 1",
                "Contact Type 2",
                "Contact Type 3",
                "Contact Type 4",
                "Contact Type 5",
              ],
            },
            // Name
            {
              displayName: "Name",
              name: "name",
              type: FieldType.Text,
            },
            // Address
            {
              displayName: "Address",
              name: "address",
              type: FieldType.Text,
            },
            // VAT Amount
            {
              displayName: "VAT Amount",
              name: "vat_amount",
              type: FieldType.Money,
            },
            // State Code
            {
              displayName: "State Code",
              name: "state_code",
              type: FieldType.Text,
            },
            // Email
            {
              displayName: "Email",
              name: "email",
              type: FieldType.Email,
            },
            // Phone Number
            {
              displayName: "Phone Number",
              name: "phone",
              type: FieldType.Phone,
            },
          ]}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <EditForm
          lg={6}
          md={6}
          sm={12}
          xs={12}
          fields={[
            // Billing Name
            {
              displayName: "Billing Name",
              name: "billing_name",
              type: FieldType.Text,
            },
            // Billing Address
            {
              displayName: "Billing Address",
              name: "billing_address",
              type: FieldType.Text,
            },
            // Billing VAT Amount
            {
              displayName: "Billing VAT Amount",
              name: "billing_vat_amount",
              type: FieldType.Money,
            },
            // Billing State Code
            {
              displayName: "Billing State Code",
              name: "billing_state_code",
              type: FieldType.Text,
            },
          ]}
        />
      </Box>
      <Box>
        <EditForm
          lg={6}
          md={6}
          sm={12}
          xs={12}
          fields={[
            // Shipping Name
            {
              displayName: "Shipping Name",
              name: "shipping_name",
              type: FieldType.Text,
            },
            // Shipping Address
            {
              displayName: "Shipping Address",
              name: "shipping_address",
              type: FieldType.Text,
            },
            // Shipping VAT Amount
            {
              displayName: "Shipping VAT Amount",
              name: "shipping_vat_amount",
              type: FieldType.Money,
            },
            // Shipping State Code
            {
              displayName: "Shipping State Code",
              name: "shipping_state_code",
              type: FieldType.Text,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default DocumentDetailContactDetailsForm;
