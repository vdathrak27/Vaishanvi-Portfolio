import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PortfolioSections = () => {
  return (
    <div>
      {/* Get in Touch Section */}
      <section
        className="py-12 px-8 flex flex-col items-center rounded-lg space-y-6"
        style={{
          background: "linear-gradient(to bottom right, #e0f2ff, #f0faff)",
          color: "black",
        }}
      >
        <h2 className="text-4xl font-bold mb-6">Get in touch!</h2>

        {/* Clickable Email Address */}
        <div className="flex items-center justify-center mb-4">
          <a
            href="mailto:vdathrak27@gmail.com"
            className="px-6 py-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 text-center"
          >
            vdathrak27@gmail.com
          </a>
        </div>

        {/* LinkedIn Section */}
        <div
          className="flex items-center space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4"
          style={{
            background: "linear-gradient(to right, #0072b1, #a5e1fa)",
            color: "white",
          }}
        >
          <FaLinkedin className="w-10 h-10 text-white" />
          <div>
            <span className="font-bold text-xl block">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/vaishnavidathrak/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white text-lg"
            >
              linkedin.com/in/vaishnavidathrak/
            </a>
          </div>
        </div>

        {/* GitHub Section */}
        <div
          className="flex items-center space-x-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          style={{
            background: "linear-gradient(to right, #333, #6c757d)",
            color: "white",
          }}
        >
          <FaGithub className="w-10 h-10 text-white" />
          <div>
            <span className="font-bold text-xl block">GitHub</span>
            <a
              href="https://github.com/vdathrak27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white text-lg"
            >
              github.com/vdathrak27
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSections;
