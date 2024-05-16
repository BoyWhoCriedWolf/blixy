import { Box, Typography } from "@mui/material";
import {
  COUNTRY_NAME_CODES,
  CountryNameCode,
} from "components/edit-form/edit-form-utils";
import PrimaryTable from "components/table";
import TableManagement from "components/table-management";
import StandardValuesList from "sections/standard-values/list";
import contactService from "services/contact.service";
import { Contact } from "services/types/contact.types";
import { FieldType } from "types/ui-types";

const ContactsList = () => {
  return (
    <TableManagement<Contact>
      apiService={contactService}
      pageTitle="Contacts"
      title="Contact"
      columns={[
        { headerName: "Company Name", field: "company_name" },
        { headerName: "Type", field: "type" },
        { headerName: "Country", field: "country" },
        { headerName: "City", field: "post_city" },
      ]}
      fields={[
        // Name
        { displayName: "Name", name: "name", type: FieldType.Text },
        // Telephone
        {
          displayName: "Telephone",
          name: "telephone",
          type: FieldType.Phone,
        },
        // Fax
        {
          displayName: "Fax",
          name: "fax",
          type: FieldType.Text,
        },
        // Email
        {
          displayName: "E-mail",
          name: "email",
          type: FieldType.Email,
        },
        // Website
        {
          displayName: "Website",
          name: "website",
          type: FieldType.Text,
        },
        // Company Name
        {
          displayName: "Company Name",
          name: "company_name",
          type: FieldType.Text,
        },
        // Description
        {
          displayName: "Description",
          name: "description",
          type: FieldType.Text,
        },
        // Address (street + number)
        {
          displayName: "Address (street + number)",
          name: "address",
          type: FieldType.Custom,
        },
        {
          placeholder: "Street + Number",
          name: "address_street",
          // lg: 6,
          // md: 6,
          // sm: 12,
          // xs: 12,
          type: FieldType.Text,
        },
        // {
        //   placeholder: "Number",
        //   name: "address_number",
        //   lg: 6,
        //   md: 6,
        //   sm: 12,
        //   xs: 12,
        //   type: FieldType.Text,
        // },
        // Country
        {
          displayName: "Country",
          name: "country",
          type: FieldType.Choice,
          options: COUNTRY_NAME_CODES,
          getOptionLabel: (option?: CountryNameCode) => option?.name ?? "",
          getOptionValue: (option?: CountryNameCode) => option?.name ?? "",
        },

        // Post Address
        {
          type: FieldType.Custom,
          render: <Typography fontWeight={"bold"}>Post address</Typography>,
        },
        // Post Address(street + number)
        {
          displayName: "Post Address(street + number)",
          name: "post_address",
          type: FieldType.Custom,
        },
        {
          placeholder: "Street",
          name: "post_address_street",
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
          type: FieldType.Text,
        },
        {
          placeholder: "Number",
          name: "post_address_number",
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
          type: FieldType.Text,
        },
        // Zipcode
        {
          placeholder: "Zipcode",
          name: "post_zip_code",
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
          type: FieldType.Text,
        },
        // City
        {
          placeholder: "City",
          name: "post_city",
          lg: 6,
          md: 6,
          sm: 12,
          xs: 12,
          type: FieldType.Text,
        },
        // KVK number
        {
          displayName: "KVK number",
          name: "kvk_number",
          type: FieldType.Text,
        },
        // BTW number
        {
          displayName: "BTW number",
          name: "btw_number",
          type: FieldType.Text,
        },

        // Note
        {
          type: FieldType.Custom,
          render: <Typography fontWeight={"bold"}>Note</Typography>,
        },
        // Note
        {
          displayName: "Note",
          name: "note",
          type: FieldType.MultiLineText,
        },

        // Purchase invoices
        {
          type: FieldType.Custom,
          render: (
            <Box>
              <Typography fontWeight={"bold"}>Purchase invoices</Typography>
              <PrimaryTable
                columns={[
                  { headerName: "Invoice description", field: "description" },
                  { headerName: "Type of invoice", field: "type" },
                  { headerName: "Invoice Number", field: "number" },
                  {
                    headerName: "Amount excluding VAT",
                    field: "amount_ex_vat",
                  },
                  {
                    headerName: "Amount including VAT",
                    field: "amount_inc_vat",
                  },
                  { headerName: "Status", field: "status" },
                ]}
              />
            </Box>
          ),
        },

        // Standard values
        {
          type: FieldType.Custom,
          render: (
            <Box>
              <Typography fontWeight={"bold"}>Standard values</Typography>
              <StandardValuesList noHeading />
            </Box>
          ),
        },
      ]}
      formWidth="lg"
      hideFooterPagination
    />
  );
};

export default ContactsList;
