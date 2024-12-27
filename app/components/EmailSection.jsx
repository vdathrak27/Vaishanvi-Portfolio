import React from "react";
import Link from "next/link";
import GithubIcon from "../assets/icons/github-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";

const PortfolioSections = () => {
  return (
    <div>
      {/* Get in Touch Section */}
      <section
        className="py-12 px-8 flex flex-col items-center rounded-lg space-y-8"
        style={{
          background: "linear-gradient(to bottom right, #1e3a8a, #1f2937)",
          color: "white",
        }}
      >
        <h2 className="text-4xl font-bold">Get in touch</h2>

        {/* Clickable Email Address */}
        <div>
          <a
            href="mailto:vdathrak27@gmail.com"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-center focus:outline-none hover:bg-gray-700"
          >
            vdathrak27@gmail.com
          </a>
        </div>

        {/* Resume Link */}
        <div>
          <a
            href="/Vaishnavi_Dathrak_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-purple-400 hover:text-purple-600"
          >
            <span>💬</span>
            <span>Resume-Vaishnavi-Dathrak.pdf</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSections;
