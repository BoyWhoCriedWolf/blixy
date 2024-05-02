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

function PrimaryTable<T = GridValidRowModel>({
  columns = [] as Array<GridColDef>,
  data = [] as Array<T>,
  isAction = false as Boolean,

  onClickRow = () => null,

  checkboxSelection = false,
}: {
  columns?: Array<GridColDef>;
  data?: Array<T>;
  isAction?: Boolean;

  onClickRow?: (row: T, rowIndex?: number, self?: Array<T>) => void;

  checkboxSelection?: boolean;
}) {
  const handleRowClick: GridEventListener<"rowClick"> = (
    params,
    event,
    details
  ) => {
    onClickRow(params.row as T);
  };

  const formattedData = data.map((item, itemIndex) => {
    // @ts-ignore
    return { ...(item ?? {}), id: item?.id ?? itemIndex } as GridValidRowModel;
  });

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={formattedData}
        columns={columns}
        checkboxSelection={checkboxSelection}
        onRowClick={handleRowClick}
      />
    </Box>
  );
}

export default PrimaryTable;
