import { Paper } from "@mui/material";
import ContactsList from "sections/contacts/contacts-list";

const ContactsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <ContactsList />
    </Paper>
  );
};

export default ContactsPage;
