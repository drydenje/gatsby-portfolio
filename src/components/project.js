import React from 'react';
import styled from 'styled-components';
import { YellowVivid, Grey } from '../utilities';

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

const BigButton = styled.a`
  display: inline-block;
  color: ${Grey[900]};
  width: 40%;
  text-decoration: none;
  background: transparent;
  border: 0.1rem solid ${Grey[900]};
  padding: 0.3rem;
  text-align: center;

  &:hover,
  &:focus {
    background-color: ${YellowVivid[500]};
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export default Project;
