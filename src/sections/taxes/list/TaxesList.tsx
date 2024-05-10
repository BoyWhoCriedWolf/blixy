import TableManagement from "components/table-management";
import { Tax } from "services/types/tax.types";
import { FieldType } from "types/ui-types";

const TaxesList = () => {
  return (
    <TableManagement<Tax>
      //   apiService={taxService}
      pageTitle="Taxes"
      title="Tax"
      columns={[
        { headerName: "Type", field: "type" },
        { headerName: "Description", field: "description" },
        { headerName: "Btw-Type Description", field: "btw_type_description" },
        { headerName: "Btw-Type", field: "btw_type" },
        { headerName: "Btw-Target", field: "btw_target" },
        { headerName: "Active", field: "active" },
        { headerName: "Valid From", field: "valid_from" },
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
        { displayName: "Btw-Type", name: "btw_type", type: FieldType.Text },
        { displayName: "Btw-Target", name: "btw_target", type: FieldType.Text },
        { displayName: "Active", name: "active", type: FieldType.Text },
        { displayName: "Valid From", name: "valid_from", type: FieldType.Text },
      ]}
      hideFooterPagination
      enableMockup
    />
  );
};

export default TaxesList;
