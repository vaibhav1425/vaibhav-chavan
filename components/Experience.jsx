import React from "react";
import Footer from "./Footer";

const experiencesData = [
  {
    role: "Information Security Consultant",
    company: "Qseap Infotech Pvt Ltd",
    duration: "May 2023 - Present",
    url: "https://www.qseap.com/",
    points: [
      "Delivered several application and network security assessments as a key team member.",
      "Well-versed with Security Assessment methodologies like OWASP Top 10.",
      "Conducted systematic web application security assessments, mobile application penetration tests, and API AppSec.",
      "Performed manual testing and analysis as well as automated vulnerability scanning/testing.",
      "Identified vulnerabilities within infrastructure and made recommendations to improve security measures."
    ],
  },
  {
    role: "Associate Security Analyst",
    company: "Eventus Techsol Pvt Ltd",
    duration: "September 2022 - April 2023",
    url: "https://www.eventustechsol.com/",
    points: [
      "Provided monitoring of XDR tool alerts for investigating events and assessing risks.",
      "Performed remediation of incidents and root cause analysis.",
      "Maintained security controls to protect organization's systems, networks, and data.",
      "Identified vulnerabilities within infrastructure and made recommendations to improve security measures."
    ],
  },
];

const ExperienceCard = ({ role, company, duration, url, points }) => (
  <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow p-6 flex flex-col">
    <div className="mb-4">
      <h3 className="text-xl font-bold text-white">{role}</h3>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        {company}
      </a>
      <p className="text-gray-400 text-sm">{duration}</p>
    </div>
    <ul className="list-disc list-inside text-gray-300 space-y-2 flex-grow">
      {points.map((point, index) => (
        <li key={index} className="text-sm">
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">
        Experience
      </h2>
      <div className="flex flex-wrap justify-center gap-7 max-w-7xl mx-auto">
        {experiencesData.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
