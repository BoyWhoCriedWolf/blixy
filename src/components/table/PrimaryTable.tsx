import { Edit, MoreVert } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TableColumnType<T = any> = {
  label?: string | ReactNode;
  name?: string;
};

function PrimaryTable<T = any>({
  columns = [] as Array<TableColumnType>,
  data = [] as Array<T>,
  isAction = false as Boolean
}: {
  columns?: Array<TableColumnType<T>>;
  data?: Array<T>;
  isAction?: Boolean;
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": {
                border: 1,
                borderColor: (theme) => theme.palette.divider,
              },
            }}
          >
            {columns.map((column, columnIndex) => {
              return (
                <TableCell key={columnIndex} align="left">
                  {column?.label ?? ""}
                </TableCell>
              );
            })}
            {
              isAction ? ( <TableCell align="left">Actions</TableCell> ) : null
            }
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 1,
                  borderColor: (theme) => theme.palette.divider,
                },
              }}
            >
              {columns.map((column, columnIndex) => {
                const renderContent: ReactNode =
                  // @ts-ignore
                  row?.[column?.name ?? ""] ?? null;

                return (
                  <TableCell key={columnIndex} align="left">
                    {renderContent}
                  </TableCell>
                );
              })}
              {
                isAction ?
                (
                  <TableCell align="center" sx={{ p: 0 }}>
                <IconButton size="small" sx={{ mr: 0.25 }}>
                  <Edit />
                </IconButton>
                <IconButton size="small">
                  <MoreVert />
                </IconButton>
              </TableCell>
                ) : null
              }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PrimaryTable;
