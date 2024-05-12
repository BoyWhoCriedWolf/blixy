import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import TableManagement from "components/table-management";
import taxService from "services/tax.service";
import { BTW_TYPES } from "services/types/btw.type.types";
import { Tax } from "services/types/tax.types";
import { FieldType, GeneralOption } from "types/ui-types";
import { percentFormatter } from "utils/number-utils";

const TaxesList = () => {
  return (
    <TableManagement<Tax>
      apiService={taxService}
      pageTitle="Taxes"
      title="Tax"
      columns={[
        { headerName: "Type", field: "type" },
        { headerName: "Description", field: "description" },
        { headerName: "Btw-Type Description", field: "btw_type_description" },
        { headerName: "Btw-Type", field: "btw_type" },
        {
          headerName: "Btw-Target",
          field: "btw_target",
          renderCell: (p: GridRenderCellParams<Tax>) =>
            percentFormatter(p?.row?.btw_target),
        },
        {
          headerName: "Active",
          field: "active",
          renderCell: (p: GridRenderCellParams) =>
            p?.row?.active ? (
              <Chip size="small" color="success" label="Active" />
            ) : null,
        },
      ]}
      fields={[
        { displayName: "Type", name: "type", type: FieldType.Text },
        {
          displayName: "Description",
          name: "description",
          type: FieldType.Text,
        },
        {
          displayName: "Btw-Type Description",
          name: "btw_type_description",
          type: FieldType.Text,
        },
        {
          displayName: "Btw-Type",
          name: "btw_type",
          type: FieldType.Choice,
          options: BTW_TYPES,
          getOptionLabel: (option?: GeneralOption) => option?.name ?? "",
          getOptionValue: (option?: GeneralOption) => option?.value ?? "",
        },
        {
          displayName: "Btw-Target",
          name: "btw_target",
          type: FieldType.Percent,
        },
        {
          displayName: "Active",
          name: "active",
          type: FieldType.DropDownYesNo,
        },
      ]}
      hideFooterPagination
    />
  );
};

export default TaxesList;
