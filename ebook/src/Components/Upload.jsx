import React, { useState } from "react";

const EbookUploadPage = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 100 * 1024 * 1024) {
        // 100 MB limit
        setErrorMessage("File size exceeds 100 MB!");
        setFile(null);
      } else {
        setErrorMessage("");
        setFile(selectedFile);
      }
    }
  };

 
  const handleUploadFile = () => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      alert("fileName"+JSON.stringify(fileURL));
      setUploadedFileURL(fileURL); 
      alert(`File "${file.name}" has been uploaded successfully!`);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Upload Your eBook</h1>

        <div className="mb-4">
          <label
            htmlFor="fileUpload"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select an eBook file (Max: 100 MB)
          </label>
          <input
            type="file"
            id="fileUpload"
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleFileChange}
            accept=".pdf,.epub,.mobi"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}

        {file && (
          <div className="mb-4">
            <p className="text-sm text-gray-700">
              Selected File: <span className="font-medium">{file.name}</span>
            </p>
            <p className="text-sm text-gray-700">
              File Size:{" "}
              <span className="font-medium">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </span>
            </p>
          </div>
        )}

        <div className="flex justify-center space-x-4">
          {file && (
            <button
              onClick={handleUploadFile}
              className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition"
            >
              Upload File
            </button>
          )}
          <button
            onClick={() => {
              setFile(null);
              setUploadedFileURL(null);
              setErrorMessage("");
            }}
            className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
      {/* Display the uploaded file */}
      {uploadedFileURL && (
        <div className="bg-white shadow-md rounded-md p-6 w-full max-w-lg mt-6">
          <h2 className="text-xl font-bold text-center mb-4">View Your eBook</h2>
          <div className="w-full h-96 overflow-auto border border-gray-300 rounded-md">
            <iframe
              src={uploadedFileURL}
              title="eBook Viewer"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default EbookUploadPage;
