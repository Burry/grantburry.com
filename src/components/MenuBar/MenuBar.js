import React from 'react';
import classnames from 'classnames';
import Nav from './Nav';
import styles from './MenuBar.module.scss';

const MenuBar = () => (
    <section className={styles.root}>
        <header>
            {['t1', 't2', 't3'].map(t => (
                <div
                    key={t}
                    className={classnames(styles.triangle, styles[t])}
                />
            ))}
            <Nav />
        </header>
        <footer className={styles.footer}>
            &copy; {new Date().getFullYear()} Grant Burry
        </footer>
    </section>
);

export default MenuBar;
