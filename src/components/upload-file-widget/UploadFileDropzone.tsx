import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React, { FC, PropsWithChildren, useState } from "react";

const UploadFileDropzone: FC<
  PropsWithChildren<{ onSelectFile?: (v: File) => void }>
> = ({ onSelectFile = () => null }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind === "file") {
          const file = event.dataTransfer.items[i].getAsFile();
          if (file) {
            setSelectedFile(file);
            onSelectFile(file);
            break; // Only handle the first file
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const file = event.dataTransfer.files[i];
        setSelectedFile(file);
        onSelectFile(file);
        break; // Only handle the first file
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

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={handleDragOver}
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
      <input type="file" accept="image/*" onChange={handleFileSelect} />
    </Box>
  );
};

export default UploadFileDropzone;
