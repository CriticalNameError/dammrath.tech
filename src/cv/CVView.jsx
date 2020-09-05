import React, {Component} from 'react';
import {CVFrontpage} from './CVDoc';
import ReactPDF, {BlobProvider, PDFDownloadLink, Document} from '@react-pdf/renderer';




const CVView = () => (
  <div>
    <PDFDownloadLink document={<CVFrontpage></CVFrontpage>} fileName="Martin_Dammrath_CV.pdf">
      {({blog, url, loading, error }) => (
        <a className="button">
         <i className="fa fa-download"></i>  Download Resume
        </a>
      )}
    </PDFDownloadLink>
    </div>
  )

export default CVView;