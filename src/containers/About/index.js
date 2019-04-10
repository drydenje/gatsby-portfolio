import React from "react"

const About = () => {
  return (
    <section className="about" id="about">
      <figure>
        <img src="./assets/Square.jpg" alt="Jeremy Dryden" />
      </figure>

      {/* Start of .wrapper */}
      <div className="wrapper">
        <h3>
          Hello, I'm <span>Jeremy Dryden</span>
        </h3>
        <p>
          I'm a Toronto, Ontario based front-end web developer looking for a
          good fit with a great company. Feel free to reach out using the form
          below, I'd love to talk!
        </p>

        <h4>Technical Skills</h4>
        <ul className="aboutSkills">
          <li>Html5</li>
          <li>Css3</li>
          <li>Sass/Scss</li>
          <li>Javascript/ES6</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Firebase</li>
        </ul>
      </div>
      {/* End of .wrapper */}
    </section>
  )
}

export default About
