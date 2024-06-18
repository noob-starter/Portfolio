import React from "react";
import "../css/FrontPage.css";
import { motion } from 'framer-motion';

const EndPage = () => {
    return (
        <div className="back">
            <motion.div
                className="back_title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: [0.30, 0, 0.60, 1]
                }}

            >
                Life's Goal
            </motion.div>

            <div className="content">
                "To build my Life from whom I don't need a Vacation from"
            </div>

            <div>
                <div class="icon-container">
                    <a href="https://github.com/noob-starter" rel="noreferrer" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/pratik-yawalkar-813a631a0/" rel="noreferrer" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/yawalkar.pratik_370/" rel="noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="mailto: pratikyawalkar71@gmail.com" rel="noreferrer" target="_blank"><i class="fab fa-google "></i></a>
                </div>

            </div>
        </div>
    )
}

export default EndPage;