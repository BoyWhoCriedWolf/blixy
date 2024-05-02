import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TableColumnType<T = any> = {
  label?: string | ReactNode;
  name?: string;
};

function PrimaryTable({
  columns = [] as Array<GridColDef<GridValidRowModel>>,
  data = [] as Array<GridValidRowModel>,
  isAction = false as Boolean,

  onClickRow = () => null,

  checkboxSelection = false,
}: {
  columns?: Array<GridColDef<GridValidRowModel>>;
  data?: Array<GridValidRowModel>;
  isAction?: Boolean;

  onClickRow?: (
    row?: GridValidRowModel,
    rowIndex?: number,
    self?: Array<GridValidRowModel>
  ) => void;

  checkboxSelection?: boolean;
}) {
  const handleRowClick: GridEventListener<"rowClick"> = () => {};

  const formattedData = data.map((item, itemIndex) => {
    item.id = item?.id ?? itemIndex;

    return item;
  });

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection={checkboxSelection}
        onRowClick={handleRowClick}
      />
    </Box>
  );
}

export default PrimaryTable;
