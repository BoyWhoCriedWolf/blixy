import { CloudUploadOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { FC, PropsWithChildren, useRef } from "react";

const UploadFileDropzone: FC<
  PropsWithChildren<{ onSelectFiles?: (v: File[]) => void }>
> = ({ onSelectFiles = () => null }) => {
  const snb = useSnackbar();

  const refInputFile = useRef<HTMLInputElement>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    const validFiles = Array.from(files).filter((file) => {
      return file.type === "application/pdf";
    });

    if (validFiles.length > 0) {
      onSelectFiles(validFiles);
    } else {
      snb.enqueueSnackbar("Please upload only PDF documents", {
        variant: "warning",
      });
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files ?? [];

    const validFiles = Array.from(files).filter((file) => {
      return file.type === "application/pdf";
    });

    if (validFiles.length > 0) {
      onSelectFiles(validFiles);
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
      <CloudUploadOutlined fontSize="large" />
      <Link>Click to upload</Link>
      <Typography>or drag and drop files here.</Typography>
      <input
        ref={refInputFile}
        type="file"
        accept=".pdf"
        onChange={handleFileSelect}
        multiple
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default UploadFileDropzone;
