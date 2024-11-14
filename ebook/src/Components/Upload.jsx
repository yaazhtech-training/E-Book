import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const maxFileSize = 100 * 1024 * 1024;

  
  function handleFile(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      
      if (selectedFile.size > maxFileSize) {
        setError('File size exceeds the 100 MB limit.');
        setFile(null); 
      } else {
        setError('');
        setFile(selectedFile);
      }
    }
  }

  function handleUpload(event) {
    event.preventDefault(); 

    if (!file) {
      setError('Please select a valid file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <div>
      <h2 className ='text-xl font-semibold' >Upload doc</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} 

      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit" disabled={!file}>Upload</button>
      </form>
    </div>
  );
};

export default Upload;
