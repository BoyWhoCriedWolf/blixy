import { Add } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import EditForm from "components/edit-form";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import PageHeading from "components/typography/page-heading";
import React, { useState } from "react";
import { FieldType } from "types/ui-types";

const AccountingChartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSave = () => {};

  return (
    <Box sx={{ p: 2, flexGrow: 1 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ mb: 4 }}>
          <PageHeading
            actions={
              <Box sx={{ display: "flex", mb: 1 }}>
                <Button
                  startIcon={<Add />}
                  variant="outlined"
                  color="primary"
                  onClick={() => setIsOpen(true)}
                  sx={{ mb: 1, mr: 2 }}
                >
                  New
                </Button>
                <SearchBar iconPosition="left" />
                <ButtonGroup
                  size="small"
                  aria-label="Small button group"
                  sx={{ ml: 2 }}
                >
                  <Button>Active</Button>
                  <Button>Inactive</Button>
                </ButtonGroup>
              </Box>
            }
          >
            New general ledger account
          </PageHeading>
        </Box>

        <PrimaryTable
          columns={[
            { headerName: "Code", field: "code", align: "center" },
            { headerName: "Description", field: "description", flex: 1 },
            { headerName: "Function", field: "function", flex: 1 },
          ]}
          data={[
            {
              code: 1,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 2,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 3,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 4,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 5,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 6,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 7,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 8,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 9,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
            {
              code: 10,
              description: "Goodwill acquisition price",
              function: "Miscellaneous (0)",
            },
          ]}
        />
      </Paper>
      <ModalContainer
        isOpen={isOpen}
        title="New general ledger account"
        onOk={() => handleSave()}
        onClose={() => setIsOpen(false)}
        okButtonLabel="Save"
        maxWidth="sm"
      >
        <Typography fontSize={20}>Facts</Typography>
        <EditForm
          fields={[
            // Number
            {
              displayName: "Number",
              name: "number",
              type: FieldType.Text,
              placeholder: "Number",
            },
            // description
            {
              displayName: "Description",
              name: "description",
              type: FieldType.Text,
              isLabel: true,
              placeholder: "Description",
            },
            // General ledger account
            {
              displayName: "General ledger account",
              name: "general_ledger_account",
              type: FieldType.Choice,
              options: [
                "Account 1",
                "Account 2",
                "Account 3",
                "Account 4",
                "Account 5",
              ],
            },
          ]}
        />
      </ModalContainer>
    </Box>
  );
};

export default AccountingChartPage;
