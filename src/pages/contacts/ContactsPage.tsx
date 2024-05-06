import { Add } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import EditForm from "components/edit-form";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import PageHeading from "components/typography/page-heading";
import { useState } from "react";
import { FieldType } from "types/ui-types";

const ContactsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<any>({});

  const handleNew = () => {
    setFormData({});
    setIsOpen(true);
  };

  const handleEdit = (value: any) => {
    setFormData(value);
    setIsOpen(true);
  };

  const handleDelete = (value: any) => {};

  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading
        actions={
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              startIcon={<Add />}
              variant="outlined"
              color="primary"
              sx={{ mr: 2 }}
              onClick={handleNew}
            >
              New
            </Button>
            <SearchBar iconPosition="left" />
          </Box>
        }
      >
        Contacts
      </PageHeading>

      <PrimaryTable
        columns={[
          { headerName: "Code", field: "code", align: "center" },
          { headerName: "Name", field: "name", flex: 1 },
          { headerName: "E-mail", field: "email", flex: 1 },
          { headerName: "Telephone", field: "telephone", flex: 1 },
          { headerName: "Place", field: "place", flex: 1 },
        ]}
        data={[
          {
            code: 1,
            name: "NIKE Retail",
            place: "HILVERSUM",
          },
          {
            code: 2,
            name: "Sole Brothers Gmbh",
            place: "Koln",
          },
          {
            code: 3,
            name: "Footer Locker Netherlands B.V.",
            place: "Vianen",
          },
          {
            code: 4,
            name: "StockX LLC",
            place: "Detroit",
          },
          {
            code: 5,
            name: "AUCTANE S.L.U",
            place: "Madrid",
          },
        ]}
        checkboxSelection={true}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ModalContainer
        title="Contact"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        maxWidth="lg"
      >
        <EditForm
          data={formData}
          onChange={setFormData}
          fields={[
            // Code
            { displayName: "Code", name: "code", type: FieldType.Text },
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
              placeholder: "Street",
              name: "address_street",
              lg: 6,
              md: 6,
              sm: 12,
              xs: 12,
              type: FieldType.Text,
            },
            {
              placeholder: "Number",
              name: "address_number",
              lg: 6,
              md: 6,
              sm: 12,
              xs: 12,
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

        <Typography fontWeight={"bold"}>Post address</Typography>
        <EditForm
          data={formData}
          onChange={setFormData}
          fields={[
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
              name: "post_kvk_number",
              type: FieldType.Text,
            },
            // BTW number
            {
              displayName: "BTW number",
              name: "post_btw_number",
              type: FieldType.Text,
            },
          ]}
        />

        {/* Note */}
        <Typography fontWeight={"bold"}>Note</Typography>
        <EditForm
          data={formData}
          onChange={setFormData}
          fields={[
            // Note
            {
              displayName: "Note",
              name: "note",
              type: FieldType.MultiLineText,
            },
          ]}
        />

        {/* Purchase invoices */}
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
            { headerName: "Amount including VAT", field: "amount_inc_vat" },
            { headerName: "Status", field: "status" },
          ]}
        />

        {/* Standard values */}
        <Typography fontWeight={"bold"}>Standard values</Typography>
        <PrimaryTable columns={[]} />
      </ModalContainer>
    </Paper>
  );
};

export default ContactsPage;
