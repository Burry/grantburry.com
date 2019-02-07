import React, { useState } from 'react';
import { string, oneOfType, object, array } from 'prop-types';
import { Helmet } from 'react-helmet';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMailbox,
    faEnvelope,
    faClipboard,
    faCheck
} from '@fortawesome/pro-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pgp from '../../pgp.key';
import styles from './Contact.module.scss';

const Button = ({ href, label, icon, className, ...props }) => (
    <a
        href={href}
        rel="noopener noreferrer"
        className={classnames('btn', 'btn-primary', className)}
        {...props}
    >
        <FontAwesomeIcon icon={icon} />
        {label}
    </a>
);

Button.propTypes = {
    href: string.isRequired,
    label: string.isRequired,
    className: string,
    icon: oneOfType([object, array, string]).isRequired
};

Button.defaultProps = {
    className: undefined
};

const Contact = () => {
    const [copied, setCopied] = useState(false);

    return (
        <>
            <Helmet title="Grant Burry » Contact" />
            <h1>
                <FontAwesomeIcon icon={faMailbox} /> Contact
            </h1>
            <h3>Get In Touch</h3>
            <p>
                <Button
                    href="mailto:grant@burry.me?subject=Hi%20there!"
                    label="grant@burry.me"
                    icon={faEnvelope}
                    className={styles.btn1}
                />
                <Button
                    href="https://linkedin.com/in/burry"
                    label="LinkedIn"
                    icon={faLinkedin}
                    target="_blank"
                />
            </p>
            <h3>PGP Key</h3>
            <CopyToClipboard text={pgp} onCopy={() => setCopied(true)}>
                <button
                    type="button"
                    className={classnames(
                        'btn',
                        copied ? 'btn-success' : 'btn-secondary'
                    )}
                >
                    <FontAwesomeIcon icon={copied ? faCheck : faClipboard} />
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </CopyToClipboard>
            <pre id="pgpKey">{pgp}</pre>
        </>
    );
};

export default Contact;
