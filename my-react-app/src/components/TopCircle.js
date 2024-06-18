import React from "react";
import "../css/TopCircle.css";
import { motion } from 'framer-motion';

const TopCircle = () => {

    return (
        <motion.div
        className="circle"
            initial={{ y: 0 }} 
            animate={{ y: [-30, 0, -30, 0] }} 
            transition={{
                duration: 3,
                repeat: Infinity, 
                repeatType: 'reverse'
            }}
        >
        </motion.div>
    )
}

export default TopCircle;