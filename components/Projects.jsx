import React from "react";
import Footer from './Footer';

// Card component for each project with equal height
const ProjectCard = ({ title, description, testimonial, git, technologies }) => {
  return (
    <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between h-full">
      <div className="p-4 flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
          {title}
        </h5>
        <p className="font-normal text-sm text-gray-300 dark:text-gray-400 mt-2">
          {description}
        </p>
        {testimonial && (
          <blockquote className="mt-4 p-3 border-l-4 border-blue-400 italic text-gray-400 text-sm">
            {testimonial}
          </blockquote>
        )}
      </div>
      <div className="m-4 flex justify-between items-end">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tag, index) => (
            <span key={`${index}-${tag}`} className="text-[13px] text-blue-400">
              #{tag}
            </span>
          ))}
        </div>
        {git && (
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 border border-gray-200 rounded-lg shadow px-2 py-1 hover:text-green-400 duration-300"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

// Pro bono cybersecurity projects data without images
const projects = [
  {
    title: 'CLOP Academy Website Security Assessment',
    description:
      'Performed comprehensive cybersecurity testing for CLOP Academy’s website as a pro bono project. Delivered a professional evaluation, identified vulnerabilities, and provided actionable recommendations to strengthen their security posture.',
    git: '',
    testimonial:
      '“Vaibhav’s expertise and willingness to help have been invaluable. His comprehensive and professional evaluation greatly strengthened my website’s security, and his actionable recommendations enabled me to address vulnerabilities with confidence. I truly appreciate the time and effort he dedicated.” — Inderjeet Singh, Founder of CLOP Academy',
    technologies: [
      'Web Security Testing',
      'Vulnerability Assessment',
      'Reporting',
      'Client Communication',
    ],
  },
  {
    title: 'GrowthX100 Website Security Assessment',
    description:
      'Conducted thorough cybersecurity testing for GrowthX100’s website. Provided detailed insights and practical recommendations that significantly enhanced the website’s security and gave the client peace of mind.',
    git: '',
    testimonial:
      '“Vaibhav’s thorough and professional assessment has significantly enhanced the security of my website, providing me with peace of mind and confidence in its safety. His kindness and dedication have made a meaningful difference, and I am deeply grateful for his help.” — Kaushal Yaduwansh, Founder of GrowthX100',
    technologies: [
      'Web Security Testing',
      'Vulnerability Assessment',
      'Client Communication',
      'Security Reporting',
    ],
  },
];

const Projects = () => {
  return (
    <div className="bg-black min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-white pt-12 pb-6">
        Projects
      </h2>
      <div className="flex flex-wrap gap-7 justify-center items-stretch px-4 pb-16">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            testimonial={item.testimonial}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
