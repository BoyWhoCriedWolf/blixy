import { FileArray, FullFileBrowser } from "chonky";

const FileBrowser = () => {
  const files: FileArray = [
    { id: "lht", name: "Projects", isDir: true },
    {
      id: "mcd",
      name: "invoice.pdf",
      //   thumbnailUrl: "https://chonky.io/chonky-sphere-v2.png",
      ext: "pdf",
    },
  ];
  const folderChain = [{ id: "xcv", name: "Demo", isDir: true }];
  //   @ts-ignore
  return <FullFileBrowser files={files} folderChain={folderChain} />;
};

export default FileBrowser;
