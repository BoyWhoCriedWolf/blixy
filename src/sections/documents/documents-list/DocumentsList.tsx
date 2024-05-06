import LoaderContainer from "components/loading/loader-container";
import PrimaryTable from "components/table";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import documentService from "services/document.service";
import { Document } from "services/types/document.types";

const DocumentsList: FC<
  PropsWithChildren<{ onClick?: (v: Document) => void }>
> = ({ onClick = () => null }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState<Array<Document>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    setIsLoading(true);
    const ret = await documentService.gets();
    setIsLoading(false);
    if (ret.success) {
      setData(ret.data ?? []);
    } else {
      enqueueSnackbar(ret.msg ?? "Unknown", { variant: "warning" });
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoaderContainer open={isLoading} style={{ height: "100%" }}>
      <PrimaryTable<Document>
        onClickRow={(row) => onClick(row)}
        columns={[
          { headerName: "Delivered", field: "delivered", flex: 1 },
          { headerName: "Employee", field: "employee", flex: 1 },
          { headerName: "TYPE", field: "doc_type", flex: 1 },
          { headerName: "Topic", field: "topic", flex: 1 },
          { headerName: "File Name", field: "file_name", flex: 1 },
          { headerName: "KB", field: "kb", flex: 1 },
          { headerName: "Vendor", field: "vendor", flex: 1 },
          { headerName: "Status", field: "status", flex: 1 },
          { headerName: "BLOCKED BY", field: "blocked_by", flex: 1 },
          { headerName: "IDR status", field: "idr_status", flex: 1 },
          { headerName: "Rcg", field: "rcg", flex: 1 },
          { headerName: "Information", field: "information", flex: 1 },
        ]}
        data={
          data
          //   [
          //   {
          //     no: <KeyboardArrowRightOutlined fontSize="small" />,
          //     square: <Checkbox size="small" />,
          //     delivered: "21-04-2024 21:20",
          //     employee: "Frank Beemer",
          //     type: <Note fontSize="small" />,
          //     topic: "",
          //     file: "cam_2024-04-21_21:20:26:0.jpg",
          //     kb: "877,1",
          //     vendor: "",
          //     status: "Open",
          //     IDR: <FactCheckOutlined fontSize="small" />,
          //     Rcg: "80%",
          //   },
          // ]
        }
        checkboxSelection={true}
      />
    </LoaderContainer>
  );
};

export default DocumentsList;
