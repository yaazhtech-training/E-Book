import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { PDFViewer } from "@react-pdf-viewer/core";
import {  Worker } from "@react-pdf-viewer/core";
import HTMLFlipBook from "react-pageflip";  // ✅ Correct
import "@react-pdf-viewer/core/lib/styles/index.css";

const ViewFile = ({ pdfFile, onClose }) => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="relative w-4/5 h-5/6 bg-white shadow-xl rounded-lg p-4">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
        
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`}>
        <HTMLFlipBook width={600} height={800}>
            {[...Array(numPages).keys()].map((pageNum) => (
              <div key={pageNum}>
                <Document
                  file={pdfFile}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                  <Page pageNumber={pageNum + 1} width={600} />
                </Document>
              </div>
            ))}
          </HTMLFlipBook>
        </Worker>
      </div>
    </div>
  );
};

export default ViewFile;
