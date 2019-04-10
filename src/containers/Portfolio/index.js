import React from "react"

// Todo: Font awesome icons, are they needed anymore after the redesign?

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="calloutWrapper">
        <div className="callout">Portfolio</div>
      </div>

      <div className="wrapper">
        {/* Feedwatch Project */}
        <div className="project">
          <a
            href="https://project-05-3b237.firebaseapp.com/"
            className="square"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project 5 - Feedwatch"
          >
            <figure className="projectImage">
              <img src="./assets/feedwatch.png" alt="Psd to Html Conversion" />
            </figure>
          </a>
          <div className="writeUp">
            <h2>Feedwatch - React Single Page App</h2>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>API</li>
              <li>Git</li>
            </ul>
            <p>
              My SPA React project lets the user store a keyword in Firebase,
              which is then used to pull the latest articles from Google's
              newsfeed. Due to api call limitations, the data is only updated
              when a keyword is added or removed.
            </p>
            <div className="middle">
              <a
                href="https://project-05-3b237.firebaseapp.com/"
                className="square"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a href="#project2" aria-label="Scroll to next project">
                <i className="fas fa-angle-double-down" />
              </a>
              <a
                href="https://github.com/drydenje/jeremy-dryden-project-5"
                className="square"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <hr className="diamond" />

        {/* Recipe Collections Project */}
        <div className="project" id="project2">
          <a
            href="./sites/recipes/"
            target="_blank"
            rel="noopener noreferrer"
            className="square"
            aria-label="Project 3 - Recipe Collector"
          >
            <figure className="projectImage">
              <img
                src="./assets/codeSnippets.png"
                alt="Psd to Html Conversion"
              />
            </figure>
          </a>
          <div className="writeUp">
            <h2>Code Recipes - jQuery Application</h2>
            <ul>
              <li>jQuery</li>
              <li>Namespacing</li>
            </ul>
            <p>
              A simple interactive recipe app that lets a user enter and save
              snippets of css code. You can navigate through currently entered
              snippets, add new ones, or delete others. As an added bonus try
              highlighting a css property, then click the question mark! A handy
              tool for programmers who don't know how to use browswer bookmarks.
            </p>
            <div className="middle">
              <a
                href="./sites/recipes/"
                target="_blank"
                rel="noopener noreferrer"
                className="square"
              >
                Live
              </a>
              <a href="#project3" aria-label="Scroll to next project">
                <i className="fas fa-angle-double-down" />
              </a>
              <a
                href="https://github.com/drydenje/jeremy-dryden-project-3"
                className="square"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <hr className="diamond" />

        {/* Beachstays Project */}
        <div className="project">
          <a
            href="./sites/beachstays/"
            target="_blank"
            rel="noopener noreferrer"
            className="square"
            aria-label="Project 2 - PSD Conversion"
          >
            <figure className="projectImage" id="project3">
              <img src="./assets/beachstay.png" alt="Psd to Html Conversion" />
            </figure>
          </a>
          <div className="writeUp">
            <h2>Beachstays - Psd Conversion</h2>
            <ul>
              <li>Html5</li>
              <li>Css3</li>
              <li>Sass/Scss</li>
              <li>Responsive</li>
              <li>Flexbox</li>
              <li>CSS Grid</li>
            </ul>
            <p>
              Navigating through this three page site that was built from a
              provided PSD the user would be able to learn more about the lovely
              beaches of Guyana, interact on a message board with other
              travelers, and contact the agency with further questions. Coded
              during the coldest part of February, because our designer has a
              warped sense of humor.
            </p>
            <div className="middle">
              <a
                href="./sites/beachstays/"
                target="_blank"
                rel="noopener noreferrer"
                className="square"
              >
                Live
              </a>
              <a
                href="https://github.com/drydenje/jeremy-dryden-project2"
                target="_blank"
                rel="noopener noreferrer"
                className="square"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
