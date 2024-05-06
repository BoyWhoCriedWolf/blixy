import { Add } from "@mui/icons-material";
import { Box, Button, Paper } from "@mui/material";
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
      >
        <EditForm
          data={formData}
          onChange={setFormData}
          fields={[
            { displayName: "Code", name: "code", type: FieldType.Text },
            { displayName: "Name", name: "name", type: FieldType.Text },
            { displayName: "E-mail", name: "email", type: FieldType.Email },
            {
              displayName: "Telephone",
              name: "telephone",
              type: FieldType.Phone,
            },
            { displayName: "Place", name: "place", type: FieldType.Text },
          ]}
        />
      </ModalContainer>
    </Paper>
  );
};

export default ContactsPage;
