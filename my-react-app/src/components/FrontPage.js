import React from "react";
import "../css/FrontPage.css";
import wave1 from '../svgs/wave1.svg'; 
import wave2 from '../svgs/wave2.svg'; 



const FrontPage = ()=>{
    return(
        <div className="front">
            <img src={wave1} className="image1" alt="image1" />
            <img src={wave2} className="image2" alt="image2"/>
            <img src="front_cover.png" className="image3" alt="cover_image" />
            <div className="front_title"> Welcome: a journey in my life</div>

        </div>
    )
}

export default FrontPage;