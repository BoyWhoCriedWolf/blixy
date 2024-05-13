import { Box, Paper, PaperTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import EditForm from "components/edit-form";
import SearchBar from "components/search-bar";
import PrimaryTable from "components/table";
import { FC, PropsWithChildren } from "react";
import { Document } from "services/types/document.types";
import { DispatchFunction, FieldType } from "types/ui-types";

const DocumentDetailBankStatement: FC<
  PropsWithChildren<{
    data?: Document;
    onChange?: DispatchFunction<Document>;
    paperContainer?: boolean;
    readOnly?: boolean;
  }>
> = ({
  data = {} as Document,
  onChange = () => null,
  paperContainer = true,
  readOnly = false,
}) => {
  const FormContainer: OverridableComponent<PaperTypeMap<{}, "div">> =
    paperContainer ? Paper : Box;

  return (
    <Box>
      <FormContainer
        sx={{
          p: 2,
          mb: 1,
          backgroundColor: (theme) => theme.palette.warning.main,
        }}
      >
        <Typography fontSize={24} fontWeight={600}>
          Copy: 1
        </Typography>
        <Typography fontWeight={500}>Organizer: Tax</Typography>
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <PrimaryTable
          columns={[
            {
              headerName: "Bank account",
              field: "account",
              flex: 1,
              renderCell: () => {
                return <SearchBar iconPosition="right" />;
              },
            },
            { headerName: "Copy", field: "copy", flex: 1 },
            { headerName: "Date", field: "date", flex: 1 },
            {
              headerName: "Previous balance",
              field: "previous",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "perviousBal",
                        placeholder: "Previous Balance",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "New balance",
              field: "new",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "newBal",
                        placeholder: "New Balance",
                      },
                    ]}
                  />
                );
              },
            },
          ]}
          data={[
            {
              copy: 1,
              date: "",
            },
          ]}
        />
      </FormContainer>
      <FormContainer sx={{ p: 2, mb: 1 }}>
        <PrimaryTable
          columns={[
            {
              headerName: "Type",
              field: "type",
              flex: 1,
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Choice,
                        options: ["standard"],
                        name: "type",
                      },
                    ]}
                  />
                );
              },
            },
            { headerName: "Trans.date", field: "date" },
            {
              headerName: "Contra account",
              flex: 1,
              field: "account",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "account",
                        placeholder: "Account",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Contra account name",
              flex: 1,
              field: "name",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      {
                        type: FieldType.Text,
                        name: "name",
                        placeholder: "Account Name",
                      },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Bee",
              flex: 1,
              field: "Bee",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      { type: FieldType.Text, name: "bee", placeholder: "Bee" },
                    ]}
                  />
                );
              },
            },
            {
              headerName: "Af",
              flex: 1,
              field: "Af",
              renderCell: () => {
                return (
                  <EditForm
                    fields={[
                      { type: FieldType.Text, name: "af", placeholder: "Af" },
                    ]}
                  />
                );
              },
            },
          ]}
          data={[{}]}
        />

        <EditForm<Document>
          readOnly={readOnly}
          data={data}
          onChange={onChange}
          fields={[
            {
              displayName: "Description",
              name: "description",
              type: FieldType.Text,
            },
          ]}
        />
      </FormContainer>
    </Box>
  );
};

export default DocumentDetailBankStatement;
