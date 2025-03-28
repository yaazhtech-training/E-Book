
import React from "react";
import { useLocation } from "react-router-dom";

const ShowPdf = () => {
  const location = useLocation();
  const { book } = location.state || {};

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
    {book && (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
        <button
          onClick={handleGoBack}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600"
        >
          Close
        </button>
        <iframe
          src={`https://drive.google.com/file/d/${book.path}/preview`}
          className="w-3/4 h-full"
          title={`Preview of ${book.name}`}
        />
      </div>
    )}
  </div>
  
  );
};

export default ShowPdf;

