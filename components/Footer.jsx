import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { SiMedium } from 'react-icons/si';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 p-4 select-none" style={{ cursor: 'default' }}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <p className="text-white text-center font-light">
          © {year} Vaibhav Chavan. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Email */}
          <div className="flex items-center gap-2">
            <FiMail className="text-xl text-white" aria-hidden="true" />
            <a
              href="mailto:vaibhavchavan1425@gmail.com"
              className="text-white hover:underline"
              aria-label="Send email to Vaibhav Chavan"
            >
              vaibhavchavan1425@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-2">
            <AiFillLinkedin className="text-xl text-white" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/vaibhav-chavan-944479211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              aria-label="Visit Vaibhav Chavan's LinkedIn profile"
            >
              LinkedIn
            </a>
          </div>

          {/* Medium */}
          <div className="flex items-center gap-2">
            <SiMedium className="text-xl text-white" aria-hidden="true" />
            <a
              href="https://medium.com/@vaibhavchavan_30571"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              aria-label="Visit Vaibhav Chavan's Medium profile"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
