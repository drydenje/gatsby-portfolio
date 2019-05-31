import React from 'react';
import styled from 'styled-components';
import { BigButton, DiamondList } from '../elements';

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
        <DiamondList>
          {details.keywords.map(word => {
            return <li key={word}>{word}</li>;
          })}
        </DiamondList>
        <p>{details.description}</p>
        <FlexCenter>
          <BigButton
            href={details.urlLive}
            className="square"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </BigButton>
          <a href={details.nextProject} aria-label="Scroll to next project">
            <i className="fas fa-angle-double-down" />
          </a>
          <BigButton
            href={details.urlGithub}
            className="square"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </BigButton>
        </FlexCenter>
      </div>
    </div>
  );
};

const FlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default Project;
