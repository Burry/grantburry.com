import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { faHome, faTools, faMailbox } from '@fortawesome/pro-solid-svg-icons';
import Logo from '../Logo';
import NavLink from './NavLink';
import styles from './Sidebar.module.scss';

const Header = () => (
    <section className={styles.root}>
        <header>
            {['t1', 't2', 't3'].map(t => (
                <div
                    key={t}
                    className={classnames(styles.triangle, styles[t])}
                />
            ))}
            <nav>
                <Link to="/" aria-label="Home" className={styles.logo}>
                    <Logo height="50" fill="#FFF" />
                </Link>
                <NavLink to="/" exact label="Home" icon={faHome} />
                <NavLink to="/projects" exact label="Projects" icon={faTools} />
                <NavLink to="/contact" exact label="Contact" icon={faMailbox} />
            </nav>
        </header>
        <footer>&copy; {new Date().getFullYear()} Grant Burry</footer>
    </section>
);

export default Header;
