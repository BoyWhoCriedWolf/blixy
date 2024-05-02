import { FC, PropsWithChildren } from "react";
// import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.js",
//   import.meta.url
// ).toString();

const PdfViewer: FC<PropsWithChildren<{ src?: string; title?: string }>> = ({
  src = "",
  title = "",
}) => {
  // const [numPages, setNumPages] = useState<number>(1);
  // const [pageNumber, setPageNumber] = useState<number>(1);

  // function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
  //   setNumPages(numPages);
  // }

  // const handleBefore = () => {
  //   setPageNumber((s = 0) => Math.max(0, s - 1));
  // };

  // const handleNext = () => {
  //   setPageNumber((s = 0) => Math.min(numPages, s + 1));
  // };

  return (
    <iframe
      src={src}
      title={title ? title : "document_viewer_" + src}
      width={"100%"}
      height={"100%"}
      style={{ border: "none", borderCollapse: "collapse" }}
    />
    // <Box sx={{ position: "relative", width: "100%" }}>
    //   <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       bottom: 0,
    //       left: "50%",
    //       transform: "translateX(-50%)",
    //       display: "flex",
    //     }}
    //   >
    //     <Button onClick={handleBefore}>Before</Button>
    //     <Button onClick={handleNext}>Next</Button>
    //   </Box>
    // </Box>
  );
};

export default PdfViewer;
