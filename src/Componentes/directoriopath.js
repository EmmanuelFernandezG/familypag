const fs = require('fs');

const directoryPath = 'C:\Users\efernandezg\OneDrive - Truper, S.A. de C.V\IMAGENES';

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Log the list of file names
  console.log('Files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});