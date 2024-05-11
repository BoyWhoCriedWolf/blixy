import EditForm from "components/edit-form";
import {
  COUNTRY_NAME_CODES,
  CountryNameCode,
} from "components/edit-form/edit-form-utils";
import { FC, PropsWithChildren } from "react";
import contactService from "services/contact.service";
import { Contact } from "services/types/contact.types";
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
        // Company Name
        {
          displayName: "Company Name",
          name: "contact_id",
          type: FieldType.Choice,
          getOptions: async () => {
            const ret = await contactService.gets();
            return ret.data ?? [];
          },
          getOptionLabel: (option?: Contact) => option?.company_name ?? "",
          getOptionValue: (option?: Contact) => option?.id ?? "",
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
          type: FieldType.Choice,
          options: COUNTRY_NAME_CODES,
          getOptionLabel: (option?: CountryNameCode) => option?.name ?? "",
          getOptionValue: (option?: CountryNameCode) => option?.name ?? "",
        },
      ]}
    />
  );
};

export default DocumentDetailAddressForm;
