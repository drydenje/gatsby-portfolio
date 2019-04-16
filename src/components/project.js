import React from 'react';
// import styled from 'styled-components';

const Project = ({ details }) => {
  return (
    <div className="project" id={details.currentProject}>
      <a
        href={details.urlLive}
        className="square"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={details.thumbnailAltText}
      >
        <figure className="projectImage">
          <img src={details.thumbnailName} alt={details.thumbnailAltText} />
        </figure>
      </a>
      <div className="writeUp">
        <h2>{details.name}</h2>
        <ul>
          {details.keywords.map(word => {
            return <li key={word}>{word}</li>;
          })}
        </ul>
        <p>{details.description}</p>
        <div className="middle">
          <a
            href={details.urlLive}
            className="square"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a href={details.nextProject} aria-label="Scroll to next project">
            <i className="fas fa-angle-double-down" />
          </a>
          <a
            href={details.urlGithub}
            className="square"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
