"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Programming & Development: Java, C, C++, JavaScript, Spring Boot,
          React.js, Angular, NodeJS, REST APIs, Git, Postman, Testing
          Documentation
        </li>
        <li>Databases: PostgreSQL, MySQL, NoSQL</li>
        <li>
          Networking: LAN/WAN technologies, TCP/IP protocols, network
          troubleshooting, OSI and TCP/IP models, subnetting, routing and
          switching protocols, VLAN configurations, firewalls, VPNs, IDS/IPS,
          access point configuration, DHCP/DNS management, and diagnostic tools
          (Wireshark, traceroute, ping)
        </li>
        <li>
          Tools & Technologies: Robotic Process Automation, Business Optix, SS&C
          Blue Prism, Customer Relationship Manager tools, UiPath, Docker, AWS
          (Elastic Beanstalk, S3, RDS), Kubernetes, AWD Chorus, CI/CD tools like
          Jenkins, Jira, Process Test Automation Framework for Testing
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Colorado Denver</li>
        <li>Master of Science in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Testing Assistant at Disability Resources & Services</li>
        <li>Senior Software Engineer at SS&C Technologies Inc</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Image Section */}
        <div className="flex justify-center items-start">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="about me section"
            className="object-contain rounded-none"
          />
        </div>

        {/* About Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed">
            I am a full stack developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            Java, JavaScript, React, Spring Boot, Node.js, HTML, CSS, and Git. I
            am a quick learner and I am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to work with
            others to deploy amazing applications.
          </p>

          {/* Tabs Section */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
