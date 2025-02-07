import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set worker source for PDF rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfUrl = "https://bookbot-web.pages.dev/#/"; // Path to the PDF file

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Dragon School PDF</h1>

      {/* PDF Viewer */}
      <div className="w-full max-w-3xl bg-white p-4 shadow-lg rounded-lg">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center">
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <p className="text-lg">
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
            disabled={pageNumber === numPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js"; // Import local worker

// // Set worker source to local worker file
// pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

// const EbookUploadPage = ({ pdfFileName }) => {
//   return (
//     <div>
//       {pdfFileName ? (
//         <Document file={`/uploads/${pdfFileName}`}>
//           <Page pageNumber={1} />
//         </Document>
//       ) : (
//         <p>Please select a PDF file.</p>
//       )}
//     </div>
//   );
// };

// export default EbookUploadPage;
