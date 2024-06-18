import React from "react";
import Card from "./Card";
import cardContents from '../static-data/data';
import subSection from "../static-data/sectionsData";
import { motion } from 'framer-motion';

const Page = React.forwardRef((props, ref) => {
  const sub = [
    { id: 1, type: "EDUCATION", no: "A" },
    { id: 3, type: "PROJECT", no: "B" },
    { id: 5, type: "WORK EXPERIENCE", no: "C" },
    { id: 7, type: "TOOLS & TECH.", no: "D" },
    { id: 9, type: "EXTRA CURRICULAR", no: "E" },
  ];

  const getsub = sub.filter(section => section.id === props.number);
  const getsubtype = (getsub.length === 0) ? "none" : getsub[0];


  const gethead = subSection.filter(section => section.id === props.number);
  const getType = (gethead.length === 0) ? "none" : gethead[0].type;
  const filteredCards = cardContents.filter(card => card.type === getType);


  return (
    <div className="page" ref={ref} data-density={props.density | "soft"}>
      <div className="page-content" >
        {((props.number + 1) % 2 === 0) ? (

          <div className="chapter">
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{
                repeat: Infinity,
                duration: 5, 
                ease: [0.42, 0, 0.58, 1] 
              }}
              
            >
              Chapter {getsubtype.no}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{
                repeat: Infinity,
                duration: 5, 
                ease: [0.42, 0, 0.58, 1] 
              }}
              
            >
              {getsubtype.type}
            </motion.div>
            
          </div>
        ) : (
          <div className="chapter-cards">
            {filteredCards.map(card => (
              <Card key={card.id} data={card.data} />
            ))}

          </div>
        )};



        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});


export default Page;