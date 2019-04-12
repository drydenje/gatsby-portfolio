import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FooterStyles } from './index.styles';

const Footer = () => {
  return (
    <FooterStyles>
      {/* Footer Section */}
      {/* The social media links on the bottom of the page */}
      <ul className="navSocialLinks">
        <li>
          {/* My Twitter Account */}
          <a
            href="https://twitter.com/itsmejeremyd"
            target="_blank"
            rel="noopener noreferrer"
            alt="twitter"
            aria-label="twitter"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
        </li>
        <li>
          {/* My LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/jeremy-dryden-2396879/"
            target="_blank"
            rel="noopener noreferrer"
            alt="linkedIn"
            aria-label="linkedIn"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
        </li>
        <li>
          {/* My GitHub Profile */}
          <a
            href="https://github.com/drydenje"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
            aria-label="github"
          >
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li>
          {/* Medium Blog */}
          <a
            href="https://medium.com/@jeremy.dryden/"
            target="_blank"
            rel="noopener noreferrer"
            alt="medium"
            aria-label="medium"
          >
            <FontAwesomeIcon icon={['fab', 'medium-m']} />
          </a>
        </li>
      </ul>
      {/* End of Footer Section */}
    </FooterStyles>
  );
};

export default Footer;
