import { Box, Grid, Paper, Typography } from "@mui/material";
import EditForm from "components/edit-form";
import WorkFlowCard from "components/workflow-card";
import { FieldType } from "types/ui-types";
import DocumentDetailAddressForm from "./DocumentDetailAddressForm";

const DocumentDetailStandard = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          ADDRESS
        </Typography>
        <DocumentDetailAddressForm />
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          DOCUMENT
        </Typography>

        <EditForm
          lg={12}
          md={12}
          sm={12}
          xs={12}
          fields={[
            // Date
            {
              displayName: "Date",
              name: "date",
              type: FieldType.DateTime,
            },
            // Subject
            {
              displayName: "Subject",
              name: "subject",
              type: FieldType.Text,
            },
          ]}
        />
      </Paper>
      <Paper sx={{ p: 2, mb: 1 }}>
        <Typography fontWeight={600} mb={1}>
          OTHER
        </Typography>
        <EditForm
          lg={12}
          md={12}
          sm={12}
          xs={12}
          fields={[
            // Voucher number
            {
              displayName: "Voucher number",
              name: "voucher_number",
              type: FieldType.Text,
            },
            // Employee
            {
              displayName: "Employee",
              name: "employee",
              type: FieldType.Text,
            },
            // Note
            {
              displayName: "Note",
              name: "note",
              type: FieldType.MultiLineText,
            },
            // File
            {
              displayName: "File",
              name: "file",
              type: FieldType.Custom,
            },
          ]}
        />
      </Paper>
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight={600} mb={1}>
          WORKFLOW
        </Typography>
        <Grid container>
          {[
            {
              heading: "Upload",
              name: "Piotr Chmielewski",
              date: "Wo 17-04-2024",
              time: "15:07",
              total: "6 to dawn, 22 o'clock",
              isArrow: true,
            },
            {
              heading: "Recognition complete",
              date: "Wo 17-04-2024",
              time: "15:09",
              total: "0 minutes",
            },
          ].map((item, itemIndex) => {
            return (
              <Grid item key={itemIndex} lg={6} md={6} sm={12} xs={12}>
                <WorkFlowCard
                  heading={item?.heading ?? ""}
                  name={item?.name ?? ""}
                  date={item?.date ?? ""}
                  time={item?.time ?? ""}
                  total={item?.total ?? ""}
                  isArrow={item?.isArrow ?? false}
                />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Box>
  );
};

export default DocumentDetailStandard;
