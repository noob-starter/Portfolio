import './App.css';
import React from "react";
import PageFlip from "./components/PageFlip";
import BookView from './components/BookView';
import TopCircle from './components/TopCircle';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <>
    <AnimatePresence wait>
    <div className='main-container'>
      <TopCircle/>
      <PageFlip />
      <BookView/>
    </div>
    <div className="small-screen-message">
        <p>Please open this web app on a larger screen.</p>
      </div>
      </AnimatePresence>
    </>
  );
};


export default App;
