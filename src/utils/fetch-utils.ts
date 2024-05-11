export const downloadPdfFromUrl = (pdfUrl = "", filename = "document.pdf") => {
  return new Promise((resolve, reject) => {
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the PDF
        const url = URL.createObjectURL(blob);

        // Create a link element and click it programmatically to initiate the download
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);

        resolve(true);
      })
      .catch((error) => {
        console.error("Error downloading PDF:", error);
        // Handle error
        reject(error);
      });
  });
};
