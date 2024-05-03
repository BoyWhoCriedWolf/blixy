import { Box } from "@mui/material";
import {
  ChonkyIconName,
  FileArray,
  FullFileBrowser,
  setChonkyDefaults,
} from "chonky";
import { ChonkyIconFA } from "chonky-icon-fontawesome";

// Somewhere in your `index.ts`:
// @ts-ignore
setChonkyDefaults({ iconComponent: ChonkyIconFA });

const FileBrowser = () => {
  const files: FileArray = [
    { id: "lht", name: "Projects", isDir: true },
    {
      id: "mcd",
      name: "invoice.pdf",
      //   thumbnailUrl: "https://chonky.io/chonky-sphere-v2.png",
      ext: "pdf",
      icon: ChonkyIconName.pdf,
    },
  ];
  const folderChain = [{ id: "xcv", name: "Demo", isDir: true }];
  return (
    <Box sx={{ height: "100%", all: "initial" }}>
      {/* @ts-ignore */}
      <FullFileBrowser files={files} folderChain={folderChain} />
    </Box>
  );
};

export default FileBrowser;
