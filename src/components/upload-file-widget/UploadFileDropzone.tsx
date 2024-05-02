import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { FC, PropsWithChildren, useRef, useState } from "react";

const UploadFileDropzone: FC<
  PropsWithChildren<{ onSelectFile?: (v: File) => void }>
> = ({ onSelectFile = () => null }) => {
  const snb = useSnackbar();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const refInputFile = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === "file") {
          const file = event.dataTransfer.items[i].getAsFile();
          if (file) {
            if (file.type === "application/pdf") {
              setSelectedFile(file);
              onSelectFile(file);
              break; // Only handle the first file
            } else {
              snb.enqueueSnackbar("Please upload only PDF document", {
                variant: "warning",
              });
            }
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        if (file) {
          if (file.type === "application/pdf") {
            setSelectedFile(file);
            onSelectFile(file);
            break; // Only handle the first file
          } else {
            snb.enqueueSnackbar("Please upload only PDF document", {
              variant: "warning",
            });
          }
        }
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
      onSelectFile(file);
    }
  };

  const handleClick = () => {
    if (refInputFile.current) {
      refInputFile.current.click();
    }
  };

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleClick}
      sx={{
        px: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        height: "100%",
        cursor: "pointer",
      }}
    >
      <Typography>{selectedFile ? selectedFile?.name : null}</Typography>
      <CloudUploadOutlined fontSize="large" />
      <Link>Click to upload</Link>
      <Typography>or drag and drop files here.</Typography>
      <input
        ref={refInputFile}
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default UploadFileDropzone;
