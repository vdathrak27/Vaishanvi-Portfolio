import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" }, // Fixed width calculation
};

const TabButton = ({ active, selectTab, children }) => {
  // Adjusted classes to remove border from <p>
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className="flex flex-col items-start">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {/* Motion div for animated bottom border */}
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-1"
      />
    </button>
  );
};

export default TabButton;
