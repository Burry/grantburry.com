import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailbox, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pgp from '../../pgp.key';

const Contact = () => (
    <>
        <h1>
            <FontAwesomeIcon icon={faMailbox} /> Contact
        </h1>
        <p className="lead">Get in touch</p>
        <p>
            <a
                href="mailto:grant@burry.me?subject=Hi%20there!"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faEnvelope} /> Email me
            </a>
            <br />
            <a
                href="https://linkedin.com/in/burry"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
        </p>
        <h3>PGP Key</h3>
        <pre>{pgp}</pre>
    </>
);

export default Contact;
