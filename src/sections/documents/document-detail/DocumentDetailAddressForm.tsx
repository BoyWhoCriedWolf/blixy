import EditForm from "components/edit-form";
import {
  COUNTRY_NAME_CODES,
  CountryNameCode,
} from "components/edit-form/edit-form-utils";
import { FC, PropsWithChildren, useState } from "react";
import contactService from "services/contact.service";
import { Contact } from "services/types/contact.types";
import { Document } from "services/types/document.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const DocumentDetailAddressForm: FC<
  PropsWithChildren<{ data?: Document; onChange?: DispatchFunction<Document> }>
> = ({ data = {} as Document, onChange = () => null }) => {
  const [contacts, setContacts] = useState<Array<Contact>>([]);

  const handleChange: DispatchFunction<Contact> = (v, name) => {
    const matchContact = contacts.find((item) => item.id === v.id);

    onChange({
      ...(data ?? {}),
      contact:
        name === "id" && matchContact
          ? matchContact
          : { ...(data.contact ?? {}), ...(v ?? {}) },
    } as Document);
  };

  return (
    <EditForm<Contact>
      lg={6}
      md={6}
      sm={12}
      xs={12}
      alignItems={"flex-end"}
      data={data.contact ?? {}}
      onChange={handleChange}
      fields={[
        // Company Name
        {
          displayName: "Company Name",
          name: "id",
          type: FieldType.Choice,
          getOptions: async () => {
            if (contacts.length) {
              return contacts;
            }
            const ret = await contactService.gets();
            setContacts(ret.data ?? []);
            return ret.data ?? [];
          },
          getOptionLabel: (option?: Contact) => option?.company_name ?? "",
          getOptionValue: (option?: Contact) => option?.id ?? "",
        },
        // Address
        {
          displayName: "Address",
          name: "address_street",
          placeholder: "Street",
          type: FieldType.Text,
          lg: 3,
          md: 3,
          sm: 3,
          xs: 6,
        },
        // address number
        {
          displayName: " ",
          name: "address_number",
          placeholder: "Number",
          type: FieldType.Text,
          lg: 3,
          md: 3,
          sm: 3,
          xs: 6,
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
          name: "post_zip_code",
          placeholder: "Zip code",
          type: FieldType.Text,
          lg: 3,
          md: 3,
          sm: 3,
          xs: 6,
        },
        // city
        {
          displayName: " ",
          name: "post_city",
          placeholder: "City",
          type: FieldType.Text,
          lg: 3,
          md: 3,
          sm: 3,
          xs: 6,
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
