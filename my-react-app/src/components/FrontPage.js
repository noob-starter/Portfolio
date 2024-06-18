import React from "react";
import "../css/FrontPage.css";
import wave1 from '../svgs/wave1.svg';
import wave2 from '../svgs/wave2.svg';
import { motion } from 'framer-motion';


const FrontPage = () => {
    return (
        <div className="front">
            <img src={wave1} className="image1" alt="image1" />
            <img src={wave2} className="image2" alt="image2" />

            <motion.img
                src="img.png"  
                alt="My Image"
                className="image3"
                initial={{ y: 0 }}
                animate={{
                    y: [-100, 10, -20], 
                }}
                transition={{
                    duration: 2, 
                    ease: "easeInOut",
                    loop: Infinity 
                }}
            />

            {/* <img src="img.png" className="image3" alt="cover_image" /> */}
            <div className="front_title">
                <p>WELCOME</p>
                <p>I'm PRATIK YAWALKAR</p>
            </div>

        </div>
    )
}

export default FrontPage;