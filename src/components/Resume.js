import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useLocation } from 'react-router-dom';
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfFile from '../doc/Chiranjiv Resume.pdf'
//import pdfFile from '../../public/Chiranjiv Resume.pdf';

function ResumeViewer() {
    let location = useLocation()
    console.log('location', location)
    const [aboutPage, setAboutPage] = useState(false);
    const [viewPdf, setViewPdf] = useState(null);

    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        setAboutPage(true);
        handlePdfFileSubmit();
    }, [])

    // form submit
    const handlePdfFileSubmit = (e) => {
        //e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        }
        else {
            setViewPdf(null);
        }
    }

    return (
        <>

            <NavBar aboutPage={aboutPage} />

            <div className="pdfViewer">
                {viewPdf ? <><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <Viewer fileUrl={viewPdf}
                        plugins={[defaultLayoutPluginInstance]} />
                </Worker></>:<p>pdf file not found</p>}
            </div>
        </>
    )
}
export default ResumeViewer;