"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Audio Transcriber using SpringAI & React",
    description: "Project 1 Description",
    image: "/images/projects/audio-transcriber.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vdathrak27/audio-transcribe",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Spring AI Image, Recipe and Prompt Generator",
    description: "Project 2 Description",
    image: "/images/projects/recipe-generator.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Software Developer Monthly Challenges List using Spring Boot and React",
    description: "Project 3 Description",
    image: "/images/projects/sde-monthly-challenge.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Function to handle tag changes
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  // Filter projects based on selected tag
  const filteredProjects =
    tag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes("Web"));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12 px-6 bg-[#121212]">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        My Projects
      </h2>

      {/* Tags for filtering */}
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>

      {/* Project Cards */}
      <ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index} // Move key here to prevent React warnings
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration:0.3, delay:index*0.4}}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
