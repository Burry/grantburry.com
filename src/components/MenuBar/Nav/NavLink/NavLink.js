import React from 'react';
import { string, oneOfType, object, array } from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavLink.module.scss';

const NavLink = ({ to, label, icon, children, ...props }) => (
    <RouterNavLink
        to={to}
        className={styles.root}
        activeClassName={styles.active}
        {...props}
    >
        <FontAwesomeIcon icon={icon} /> {label}
    </RouterNavLink>
);

NavLink.propTypes = {
    to: string.isRequired,
    label: string.isRequired,
    icon: oneOfType([object, array, string]).isRequired
};

export default NavLink;
