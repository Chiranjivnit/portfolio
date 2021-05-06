import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Document, Page } from 'react-pdf';
import Resume from '../doc/ChiranjivResume.pdf';
import { useLocation } from 'react-router-dom';

function ResumeViewer() {
    let location = useLocation()
console.log('location',location)
    const [numpages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [aboutPage, setAboutPage] = useState(false);

    const onDocumentLoadSuccess = ({ pages }) => {
        setNumPages(pages);
    }

    useEffect(() => {
        setAboutPage(true);
    }, [])

    return (
        <>
          
            <NavBar aboutPage={aboutPage}/>
                
            <div className="pdfViewer">
                <Document
                    file={Resume}
                    options={{ workerSrc: "/pdf.worker.js" }}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </div>
            {/* <p>page{pageNumber} of {numpages}</p> */}
        </>
    )
}
export default ResumeViewer;