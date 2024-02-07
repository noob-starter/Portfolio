import './App.css';
import React from "react";
import PageFlip from "./components/PageFlip";
import BookView from './components/BookView';
import TopCircle from './components/TopCircle';


const App = () => {
  return (
    <div className='main-container'>
      <TopCircle/>
      <PageFlip />
      <BookView/>
    </div>
  );
};


export default App;
