import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/pro-solid-svg-icons';

const Projects = () => (
    <>
        <Helmet title="Grant Burry » Projects" />
        <h1>
            <FontAwesomeIcon icon={faTools} /> Projects
        </h1>
        <i className="lead">Update in progress...</i>
    </>
);

export default Projects;
