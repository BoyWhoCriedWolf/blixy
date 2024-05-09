import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Grid, IconButton } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRenderCellParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import ConfirmButtonContainer from "components/containers/confirm-button-container";
import { useMemo } from "react";

function PrimaryTable<T = GridValidRowModel>({
  columns = [] as Array<GridColDef>,
  data = [] as Array<T>,
  isAction = false as Boolean,

  onClickRow = () => null,

  checkboxSelection = false,

  onEdit,
  onDelete,
  onView,

  hideFooterPagination = false,
}: {
  columns?: Array<GridColDef>;
  data?: Array<T>;
  isAction?: Boolean;

  onClickRow?: (row: T, rowIndex?: number, self?: Array<T>) => void;

  checkboxSelection?: boolean;

  onEdit?: (row: T, rowIndex?: number, self?: Array<T>) => void;
  onDelete?: (row: T, rowIndex?: number, self?: Array<T>) => void;
  onView?: (row: T, rowIndex?: number, self?: Array<T>) => void;

  hideFooterPagination?: boolean;
}) {
  const formattedData = useMemo(
    () =>
      data.map((item, itemIndex) => {
        return {
          ...(item ?? {}),
          // @ts-ignore
          id: item?.id ?? itemIndex,
        } as GridValidRowModel;
      }),
    [data]
  );

  const hasOnEdit = typeof onEdit === "function";
  const hasOnDelete = typeof onDelete === "function";
  const hasOnView = typeof onView === "function";
  const hasActions = hasOnEdit || hasOnDelete || hasOnView;

  const handleRowClick: GridEventListener<"rowClick"> = (
    params,
    event,
    details
  ) => {
    onClickRow(params.row as T);
  };

  const handleEdit = (value: T) => {
    if (onEdit) {
      onEdit(value);
    }
  };

  const handleDelete = (value: T) => {
    if (onDelete) {
      onDelete(value);
    }
  };

  const handleView = (value: T) => {
    if (onView) {
      onView(value);
    }
  };

  const formattedColumns: Array<GridColDef> = useMemo(
    () =>
      [
        ...columns.map((item) => ({ ...item, flex: item?.flex ?? 1 })),
        ...((hasActions
          ? [
              {
                headerName: "Actions",
                renderCell: (params: GridRenderCellParams) => {
                  return (
                    <Grid container flexWrap={"nowrap"}>
                      {hasOnView ? (
                        <Grid item>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleView(params.row)}
                          >
                            <Visibility />
                          </IconButton>
                        </Grid>
                      ) : null}
                      {hasOnEdit ? (
                        <Grid item>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => handleEdit(params.row)}
                          >
                            <Edit />
                          </IconButton>
                        </Grid>
                      ) : null}
                      {hasOnDelete ? (
                        <Grid item>
                          <ConfirmButtonContainer
                            onClick={() => handleDelete(params.row)}
                          >
                            <IconButton size="small" color="error">
                              <Delete />
                            </IconButton>
                          </ConfirmButtonContainer>
                        </Grid>
                      ) : null}
                    </Grid>
                  );
                },
              },
            ]
          : []) as Array<GridColDef>),
      ] as Array<GridColDef>,

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columns, hasActions]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={formattedData}
        columns={formattedColumns}
        checkboxSelection={checkboxSelection}
        onRowClick={handleRowClick}
        hideFooterPagination={
          formattedData.length > 100 ? false : hideFooterPagination
        }
      />
    </Box>
  );
}

export default PrimaryTable;
