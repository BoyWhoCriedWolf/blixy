import { Paper } from "@mui/material";
import SearchBar from "components/search-bar";
import PageHeading from "components/typography/page-heading";
import ContactsList from "sections/contacts/contacts-list";

const ContactsPage = () => {
  return (
    <Paper sx={{ p: 2, m: 2, flexGrow: 1 }}>
      <PageHeading actions={<SearchBar iconPosition="left" />}>
        Contacts
      </PageHeading>
      <ContactsList />
    </Paper>
  );
};

export default ContactsPage;
