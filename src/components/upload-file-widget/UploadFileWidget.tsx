import { Box, Stack } from "@mui/material";
import ModalContainer from "components/containers/modal-container";
import EditForm from "components/edit-form";
import { useSnackbar } from "notistack";
import { FC, PropsWithChildren, useState } from "react";
import documentService from "services/document.service";
import { DOCUMENT_TYPES, Document } from "services/types/document.types";
import { APIResponseType } from "services/types/response.types";
import { FieldType, GeneralOption } from "types/ui-types";
import UploadFileDropzone from "./UploadFileDropzone";
import UploadProgressCard from "./UploadProgressCard";

const UploadFileWidget: FC<
  PropsWithChildren<{ onUploaded?: (v?: any) => void }>
> = ({ onUploaded = () => null }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [progresses, setProgresses] = useState<Array<number>>([]);
  const [formData, setFormData] = useState<Document>({} as Document);

  const doUpload = async (file: File, fileIndex: number) => {
    if (file) {
      const setProgress = (v: number) =>
        setProgresses((s) => [
          ...s.slice(0, fileIndex),
          v,
          ...s.slice(fileIndex + 1),
        ]);

      const submitData = new FormData();
      submitData.append("file", file);
      submitData.append("doc_type", formData.doc_type as string);

      setProgress(0);

      const ret: APIResponseType = await documentService.upload({
        data: submitData,
        onProgress: setProgress,
      });

      if (ret?.success) {
        enqueueSnackbar(
          `Successfully Uploaded ${file.name ?? ""} (${fileIndex + 1})`,
          { variant: "success" }
        );
        // onUploaded(ret?.data);
        // setIsOpen(false);
        // setProgress(0);
      } else {
        enqueueSnackbar(ret?.msg || "Unknown", { variant: "warning" });
      }
    }
  };

  const handleSelectFiles = (v: File[]) => {
    setSelectedFiles(v);
    setProgresses(Array.from({ length: v.length }).map(() => 0));
    setIsOpen(true);
  };

  const handleUpload = async () => {
    if (!formData.doc_type) {
      enqueueSnackbar("Please select document type", { variant: "warning" });
      return;
    }
    setIsLoading(true);
    for (let index = 0; index < selectedFiles.length; index++) {
      const element = selectedFiles[index];
      await doUpload(element, index);
    }
  };

  const handleDelete = (value: File, valueIndex: number) =>
    setSelectedFiles((s) => [
      ...s.slice(0, valueIndex),
      ...s.slice(valueIndex + 1),
    ]);

  return (
    <Box sx={{ height: "100%" }}>
      <UploadFileDropzone onSelectFiles={handleSelectFiles} />

      <ModalContainer
        isOpen={isOpen || isLoading}
        onClose={() => setIsOpen(false)}
        title="File Uploading"
        okButtonLabel={"Submit"}
        onOk={isLoading ? undefined : handleUpload}
      >
        <Stack>
          {selectedFiles.map((item, itemIndex) => (
            <UploadProgressCard
              key={itemIndex}
              file={item}
              progress={progresses[itemIndex]}
              onDelete={() => handleDelete(item, itemIndex)}
            />
          ))}
          <EditForm<Document>
            data={formData}
            onChange={setFormData}
            fields={[
              {
                displayName: "Document Type",
                name: "doc_type",
                type: FieldType.Choice,
                options: DOCUMENT_TYPES,
                getOptionLabel: (opt?: GeneralOption) => opt?.name ?? "",
                getOptionValue: (opt?: GeneralOption) => opt?.value ?? "",
              },
            ]}
          />
        </Stack>
      </ModalContainer>
    </Box>
  );
};

export default UploadFileWidget;
