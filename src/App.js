import React from 'react';
import PortFolio from './components/PortFolio';
import './App.css';
import {Route} from 'react-router-dom';
import ResumeViewer from './components/Resume';

function App() {
  return (
    <>
    <Route exact path="/">
    <PortFolio/>
    </Route>
    <Route  path="/resumeViewer">
     <ResumeViewer/>
    </Route>
    </>
  );
}

export default App;
