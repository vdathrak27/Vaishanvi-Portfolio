"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../assets/icons/github-icon.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center overflow-x-hidden py-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center max-w-screen-xl mx-auto px-4">
        {/* Left Section */}
        <div className="col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Vaishnavi",
                1000,
                "Software Engineer",
                1000,
                "Testing Assistant",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          With over 5 years of experience and a master’s degree, I excel in developing secure, scalable solutions using Java, Spring Boot, and cloud technologies. 
          Notable achievements include modernizing systems, deploying ChallengeApp on AWS, and implementing authentication with Spring Security and OAuth2. 
          Skilled in microservices, Docker, Kubernetes, and PostgreSQL, I deliver high-performing, reliable systems and am driven to enhance customer experiences globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* Button for Shooting an Email */}
            <a
              href="mailto:vdathrak27@gmail.com"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 text-center"
            >
              Shoot an Email
            </a>
            {/* Button for Resume */}
            <a
              href="/Vaishnavi_Dathrak_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2 text-white hover:bg-slate-800 text-center">
                Resume
              </span>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-5 flex justify-center mt-8 lg:mt-0">
          <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="vaishnavi image"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Let's Connect and Collaborate Section */}
      <section className="w-full max-w-screen-xl mx-auto px-4 mt-8">
        {/* Background Gradient */}
        <div></div>
        {/* Content */}
        <div className="relative z-10 py-16 text-center">
          <h5 className="text-xl font-bold text-white my-2">
            Let's Connect and Collaborate
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-3xl mx-auto">
            I am currently seeking exciting new opportunities that align with my
            passion for technology, innovation, and meaningful problem-solving.
            My inbox is always open to connect with like-minded professionals,
            explore groundbreaking ideas, and discuss potential collaborations.
            I thrive in dynamic environments that encourage creativity and foster
            innovation, and I am eager to contribute to initiatives that push
            boundaries and deliver impactful solutions. Whether it's brainstorming
            a fresh perspective on a project, tackling complex challenges, or
            exploring the next big idea in technology, I welcome the opportunity
            to connect and make a difference.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            {/* GitHub Icon */}
            <Link
              href="https://github.com/vdathrak27?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-8 h-8 overflow-visible fill-current text-white hover:text-purple-500" />
            </Link>

            {/* LinkedIn Icon */}
            <Link
              href="https://www.linkedin.com/in/vaishnavidathrak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="w-8 h-8 overflow-visible fill-current text-white hover:text-purple-500" />
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
