import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerQuestion } from '@fortawesome/pro-solid-svg-icons';

const NotFound = () => (
    <section>
        <h1>
            <FontAwesomeIcon icon={faMapMarkerQuestion} /> OOPS!
        </h1>
        <p className="lead">Looks like this page doesn&apos;t exist.</p>
        <Link to="/">Go Home</Link>
    </section>
);

export default NotFound;
