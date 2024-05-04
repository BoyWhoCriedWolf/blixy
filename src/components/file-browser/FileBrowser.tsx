export const FILE_BROWSER_BASE_URL = "https://blixy-file-manager.onrender.com";

const FileBrowser = () => {
  return (
    <iframe
      title="File Browser"
      style={{
        height: "100%",
        width: "100%",
        border: "none",
        borderCollapse: "collapse",
      }}
      src={`${FILE_BROWSER_BASE_URL}/`}
    />
  );
};

export default FileBrowser;
