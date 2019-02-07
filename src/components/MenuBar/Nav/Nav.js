import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';
import { faHome, faTools, faMailbox } from '@fortawesome/pro-solid-svg-icons';
import NavLink from './NavLink';
import styles from './Nav.module.scss';

const getWidth = () =>
    Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );

const Nav = () => {
    const isDesktop = () => Boolean(getWidth() > 767.98);
    const [isOpen, setNavOpen] = useState(isDesktop());
    const setNavByWidth = () => setNavOpen(isDesktop());
    useEffect(() => {
        window.addEventListener('resize', setNavByWidth);
        return () => window.removeEventListener('resize', setNavByWidth);
    });
    return (
        <>
            <button
                type="button"
                className={classnames(
                    styles.btnCollapse,
                    isOpen && styles.active
                )}
                onClick={() => setNavOpen(!isOpen)}
            >
                <span className={styles.btnCollapseBox}>
                    <span className={styles.btnCollapseInner} />
                </span>
            </button>
            <Collapse
                isOpened={isOpen}
                theme={{ content: styles.collapseContainer }}
            >
                <nav>
                    <NavLink to="/" exact label="Home" icon={faHome} />
                    <NavLink
                        to="/projects"
                        exact
                        label="Projects"
                        icon={faTools}
                    />
                    <NavLink
                        to="/contact"
                        exact
                        label="Contact"
                        icon={faMailbox}
                    />
                </nav>
                <footer className={styles.navFooter}>
                    &copy; {new Date().getFullYear()} Grant Burry
                </footer>
            </Collapse>
        </>
    );
};

export default Nav;
