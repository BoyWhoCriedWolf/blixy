import { Add } from "@mui/icons-material";
import { Breakpoint, Button, Grid } from "@mui/material";
import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";
import ModalContainer from "components/containers/modal-container";
import EditForm from "components/edit-form";
import LoaderContainer from "components/loading/loader-container";
import PrimaryTable from "components/table/PrimaryTable";
import PageHeading from "components/typography/page-heading";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import apiService, { APIService } from "services/api.service";
import { StaticField } from "types/ui-types";

function TableManagement<T = GridValidRowModel>({
  pageTitle = "",
  title = "",
  columns = [] as Array<GridColDef>,
  formWidth = "sm",
  fields = [],
  viewFields = fields,

  availableActions = ["Edit", "Delete"],
  hideFooterPagination = false,

  apiService: service = apiService,

  enableMockup = false,

  // @ts-ignore
  extractId = (v: T) => v?.id ?? "",
}: {
  pageTitle?: string;
  title?: string;
  columns?: Array<GridColDef>;
  formWidth?: Breakpoint;
  fields?: Array<Partial<StaticField>>;
  viewFields?: Array<Partial<StaticField>>;

  availableActions?: Array<"Edit" | "View" | "Delete">;
  hideFooterPagination?: boolean;

  apiService?: APIService;

  enableMockup?: boolean;

  extractId?: (value: T) => string;
}) {
  const snb = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<T>>([]);
  const [formData, setFormData] = useState<T>({} as T);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);

  const hasEdit = availableActions.find((item) => item === "Edit");
  const hasView = availableActions.find((item) => item === "View");
  const hasDelete = availableActions.find((item) => item === "Delete");

  const handleClose = () => setIsOpen(false);
  const handleCloseView = () => setIsOpenView(false);

  const handleAdd = () => {
    setFormData({} as T);
    setIsOpen(true);
  };

  const handleEdit = (value: T) => {
    setFormData(value);
    setIsOpen(true);
  };

  const handleView = (value: T) => {
    setFormData(value);
    setIsOpenView(true);
  };

  const handleDelete = async (value: T) => {
    const id = extractId(value);
    if (id) {
      setIsLoading(true);
      const ret = await service.delete({ id: id });
      console.log(ret);
      setIsLoading(false);
      if (ret.success || enableMockup) {
        snb.enqueueSnackbar(ret.msg ?? "Deleted successfully", {
          variant: "success",
        });

        setData((s = []) => s.filter((item) => !(extractId(item) === id)));
      } else {
        snb.enqueueSnackbar(ret.msg ?? "Delete failed(Unknown error)", {
          variant: "warning",
        });
      }
    } else {
      snb.enqueueSnackbar("Please select a valid row", { variant: "warning" });
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    const ret = await service.gets();
    console.log(ret);
    setIsLoading(false);
    if (ret.success) {
      setData(ret.data ?? []);
    } else if (enableMockup) {
      setData([{ id: "mockup" } as T]);
    }
  };

  const handleSave = async () => {
    setIsOpen(false);
    setIsLoading(true);
    const ret = await service.save({ data: formData });
    console.log(ret);
    setIsLoading(false);

    if (ret.success) {
      loadData();
    } else if (enableMockup) {
      if (extractId(formData)) {
        setData((s = []) => {
          const matchIndex = s.findIndex(
            (item) => extractId(item) === extractId(formData)
          );
          return [
            ...s.slice(0, matchIndex),
            formData,
            ...s.slice(matchIndex + 1),
          ] as Array<T>;
        });
      } else {
        setData(
          (s = []) =>
            [...s, { ...formData, id: Math.random().toString() }] as Array<T>
        );
      }
    } else {
      setIsOpen(true);
      snb.enqueueSnackbar(ret.msg ?? "Failed to save (Unknown Error)", {
        variant: "warning",
      });
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LoaderContainer open={isLoading} style={{ height: "100%" }}>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: 2 }}
      >
        <Grid item>
          {pageTitle ? <PageHeading>{pageTitle}</PageHeading> : null}
        </Grid>
        <Grid item>
          <Button
            onClick={handleAdd}
            variant="outlined"
            size="small"
            startIcon={<Add />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <PrimaryTable<T>
        data={data}
        columns={columns}
        onEdit={hasEdit ? handleEdit : undefined}
        onView={hasView ? handleView : undefined}
        onDelete={hasDelete ? handleDelete : undefined}
        hideFooterPagination={hideFooterPagination}
      />

      {/* Edit form */}
      <ModalContainer
        isOpen={isOpen}
        title={title}
        onClose={handleClose}
        okButtonLabel="Save"
        onOk={handleSave}
        maxWidth={formWidth}
      >
        <EditForm<T> data={formData} onChange={setFormData} fields={fields} />
      </ModalContainer>

      {/* Edit form */}
      <ModalContainer
        isOpen={isOpenView}
        title={title}
        onClose={handleCloseView}
        maxWidth={formWidth}
      >
        <EditForm<T>
          data={formData}
          onChange={setFormData}
          fields={viewFields}
          readOnly={true}
        />
      </ModalContainer>
    </LoaderContainer>
  );
}

export default TableManagement;
