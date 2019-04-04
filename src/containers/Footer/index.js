import React, { Fragment } from 'react';

const Footer = () => {
   return(
      <Fragment>
         {/* Footer Section */}
         <footer>
            {/* The social media links on the bottom of the page */}
            <ul className="navSocialLinks">
               <li>
                  <a href="https://twitter.com/itsmejeremyd" target="_blank" rel="noopener noreferrer" alt="twitter" aria-label="twitter">
                     <i className="fab fa-twitter"></i>
                  </a>
               </li>
               <li>
                  <a href="https://www.linkedin.com/in/jeremy-dryden-2396879/" target="_blank" rel="noopener noreferrer" alt="linkedIn" aria-label="linkedIn">
                     <i className="fab fa-linkedin-in"></i>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/drydenje" target="_blank" rel="noopener noreferrer" alt="github" aria-label="github">
                     <i className="fab fa-github"></i>
                  </a>
               </li>
               <li>
                  <a href="https://medium.com/@jeremy.dryden/" target="_blank" rel="noopener noreferrer" alt="medium" aria-label="medium">
                     <i className="fab fa-medium-m"></i>
                  </a>
               </li>
            </ul>
         </footer>
         {/* End of Footer Section */}
      </Fragment>
   )
}

export default Footer;