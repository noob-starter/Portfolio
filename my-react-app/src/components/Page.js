import React from "react";
import Card from "./Card";



const Page = React.forwardRef((props, ref) => {


    return (
      <div className="page" ref={ref} data-density={props.density | "soft"}>
        <div className="page-content" >
                  {((props.number+1) % 2 === 0) ? (
                  <div className="chapter">
                    <h1>Chapter 1 : Education</h1>
                  </div>
                ) : (
                  <div className="chapter-cards">
                      <Card/>
                      <Card/>
                      <Card/>
                      <Card/>

                  </div>
                )};



          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });


export default Page;