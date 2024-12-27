import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="flex flex-col justify-between h-full shadow-lg rounded-xl overflow-hidden bg-[#181818]">
      {/* Image Section */}
      <div
        className="h-52 md:h-72 bg-cover bg-center relative group"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Hover Overlay */}
        <div className="overlay items-center justify-center space-x-6 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* GitHub Link */}
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 flex items-center justify-center border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:hover:text-white" />
            </Link>
          )}

          {/* Live Preview Link */}
          {previewUrl && (
            <Link
              href={previewUrl}
              className="h-14 w-14 flex items-center justify-center border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:hover:text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white mt-4 bg-[#1E1E1E] rounded-b-xl py-4 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
