import React from 'react';
import { PortfolioStyles } from './index.styles.js';

// Components
import Project from '../../components/project';

// Elements
import { Hr } from '../../elements';

// Utilities
import { GreenVivid, YellowVivid } from '../../utilities';

// Images
import FeedwatchThumbnail from '../../images/projects/feedwatch.png';
import CodeSnippetsThumbnail from '../../images/projects/codeSnippets.png';
import BeachstayThumbnail from '../../images/projects/beachstay.png';

const Portfolio = () => {
  return (
    <PortfolioStyles className="portfolio" id="portfolio">
      {/* Feedwatch Project */}
      <Project
        details={{
          name: 'Project 5 - React Single Page App',
          urlGithub: 'https://github.com/drydenje/jeremy-dryden-project-5',
          urlLive: 'https://project-05-3b237.firebaseapp.com/',
          thumbnailName: FeedwatchThumbnail,
          thumbnailAltText: 'Project 5: Feedwatch.',
          keywords: ['React', 'Firebase', 'API', 'Git'],
          description:
            "My SPA React project lets the user store a keyword in Firebase, which is then used to pull the latest articles from Google's newsfeed. Due to api call limitations, the data is only updated when a keyword is added or removed.",
          thisProject: 'project1',
          nextProject: 'project2',
        }}
      />

      <div>
        <Hr
          lineColour={GreenVivid['900']}
          lineWidth="75%"
          diamondColour={YellowVivid['500']}
        />
      </div>

      {/* Recipe Collections Project */}
      <Project
        details={{
          name: 'Project 3 - Code Recipes - jQuery Application',
          urlGithub: 'https://github.com/drydenje/jeremy-dryden-project-3',
          urlLive: 'https://drydenje.github.io/jeremy-dryden-project-3/',
          thumbnailName: CodeSnippetsThumbnail,
          thumbnailAltText: 'Project 3 - Recipe Collector',
          keywords: ['jQuery', 'Namespacing'],
          description:
            "A simple interactive recipe app that lets a user enter and save snippets of css code. You can navigate through currently entered snippets, add new ones, or delete others. As an added bonus try highlighting a css property, then click the question mark! A handy tool for programmers who don't know how to use browser bookmarks.",
          thisProject: 'project2',
          nextProject: 'project3',
        }}
      />

      <div>
        <Hr
          lineColour={GreenVivid['900']}
          lineWidth="75%"
          diamondColour={YellowVivid['500']}
        />
      </div>

      {/* Beachstays Project */}
      <Project
        details={{
          name: 'Project 2 - Beachstays - PSD Conversion',
          urlGithub: 'https://github.com/drydenje/jeremy-dryden-project2',
          urlLive: 'https://drydenje.github.io/jeremy-dryden-project2/',
          thumbnailName: BeachstayThumbnail,
          thumbnailAltText: 'Psd to Html Conversion',
          keywords: [
            'Html5',
            'Css3',
            'Sass/Scss',
            'Responsive',
            'Flexbox',
            'Css Grid',
          ],
          description:
            'Navigating through this three page site that was built from a provided PSD the user would be able to learn more about the lovely beaches of Guyana, interact on a message board with other travelers, and contact the agency with further questions. Coded during the coldest part of February, because our designer has a warped sense of humor.',
          thisProject: 'project3',
          nextProject: '',
        }}
      />
    </PortfolioStyles>
  );
};

export default Portfolio;
