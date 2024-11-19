// import React, { useState } from 'react';

// const Upload = () => {
//   const [file, setFile] = useState(null);
//   const [error, setError] = useState('');

//   const maxFileSize = 100 * 1024 * 1024;

  
//   function handleFile(event) {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
      
//       if (selectedFile.size > maxFileSize) {
//         setError('File size exceeds the 100 MB limit.');
//         setFile(null); 
//       } else {
//         setError('');
//         setFile(selectedFile);
//       }
//     }
//   }

//   function handleUpload(event) {
//     event.preventDefault(); 

//     if (!file) {
//       setError('Please select a valid file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     fetch('url', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('Success:', result);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }

//   return (
//     <div>
//       <h2 className ='text-xl font-semibold' >Upload doc</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>} 

//       <form onSubmit={handleUpload}>
//         <input type="file" name="file" onChange={handleFile} />
//         <button type="submit" disabled={!file}>Upload</button>
//       </form>
//     </div>
//   );
// };

// export default Upload;


import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false); 
  const [uploadSuccess, setUploadSuccess] = useState(false); 

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

    setIsUploading(true); 
    setUploadSuccess(false); 

    const formData = new FormData();
    formData.append('file', file);

    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        setIsUploading(false); // Set uploading state to false
        setUploadSuccess(true); // Set success state
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsUploading(false); // Set uploading state to false
        setError('Upload failed. Please try again.'); // Set error message on failure
      });
  }

  return (
    <div className='container relative border-2 border-blue-500 border-dashed mt-10 mx-auto  p-20 rounded-xl'>
      <h2 className="text-xl font-semibold -mt-10">Upload doc</h2>
      {error && <p className='mt-24' style={{ color: 'red' }}>{error}</p>}
      {uploadSuccess && <p style={{ color: 'green' }}>Upload successful!</p>} 

      <form onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFile} />
        {/* <div className='flex justify-center '> */}
        <button className=' absolute rounded-xl bg-blue-400  p-2 ' type="submit" disabled={!file || isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'} 
        </button>
        {/* </div> */}
      </form>
    </div>
  );
};

export default Upload;
