// src/components/PDFViewer.jsx
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer-container" style={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
