import EditForm from "components/edit-form";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const DocumentDetailAddressForm: FC<
  PropsWithChildren<{ data?: Document; onChange?: DispatchFunction<Document> }>
> = ({ data = {} as Document, onChange = () => null }) => {
  return (
    <EditForm
      lg={6}
      md={6}
      sm={12}
      xs={12}
      data={data}
      onChange={onChange}
      fields={[
        // Contact
        {
          displayName: "Contact",
          name: "contact",
          type: FieldType.Choice,
          options: [
            "Contact 1",
            "Contact 2",
            "Contact 3",
            "Contact 4",
            "Contact 5",
          ],
        },
        // Address
        {
          displayName: "Address",
          name: "address",
          type: FieldType.Text,
        },
        // Chamber of Commerce-number
        {
          displayName: "Chamber of Commerce-number",
          name: "chamber_commerce_number",
          type: FieldType.Text,
        },
        // Zip code city
        {
          displayName: "Zip code city",
          name: "city_zip_code",
          type: FieldType.Text,
        },
        // VAT-number
        {
          displayName: "VAT-number",
          name: "vat_number",
          type: FieldType.Text,
        },
        // Website
        {
          displayName: "Website",
          name: "website",
          type: FieldType.Text,
        },
        // Country
        {
          displayName: "Country",
          name: "country",
          type: FieldType.Text,
        },
      ]}
    />
  );
};

export default DocumentDetailAddressForm;
