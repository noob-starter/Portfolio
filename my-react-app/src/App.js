import './App.css';
import React from "react";
import PageFlip from "./components/PageFlip";
import BookView from './components/BookView';


const App = () => {
  return (
    <div>
      <BookView/>
      <PageFlip />
    </div>
  );
};


export default App;
