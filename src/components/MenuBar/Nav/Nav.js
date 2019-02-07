import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import { faHome, faTools, faMailbox } from '@fortawesome/pro-solid-svg-icons';
import Logo from './Logo';
import NavLink from './NavLink';
import styles from './Nav.module.scss';

const browserWidth = () =>
    Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );

const Nav = () => {
    const isDesktop = () => Boolean(browserWidth() > 767.98);
    const [isOpen, setNavOpen] = useState(isDesktop());
    const setNavByWidth = () => setNavOpen(isDesktop());
    const closeNavProp = {
        onClick: () => (isDesktop ? null : setNavOpen(false))
    };
    useEffect(() => {
        window.addEventListener('resize', setNavByWidth);
        return () => window.removeEventListener('resize', setNavByWidth);
    });
    return (
        <>
            <div className={styles.navBar}>
                <Link to="/" aria-label="Home" className={styles.logoLink}>
                    <Logo fill="#FFF" className={styles.logo} />
                </Link>
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
            </div>
            <Collapse
                isOpened={isOpen}
                theme={{ content: styles.collapseContainer }}
            >
                <nav>
                    <NavLink
                        to="/"
                        exact
                        label="Home"
                        icon={faHome}
                        {...closeNavProp}
                    />
                    <NavLink
                        to="/projects"
                        exact
                        label="Projects"
                        icon={faTools}
                        {...closeNavProp}
                    />
                    <NavLink
                        to="/contact"
                        exact
                        label="Contact"
                        icon={faMailbox}
                        {...closeNavProp}
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
