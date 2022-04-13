import React from 'react';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <a to='/'>All Meetups</a>
                    </li>
                    <li>
                        <a to='/new-meetups'>Add New   Meetups</a>
                    </li>
                    <li>
                        <a to='/new-meetups'>My Favorites</a>
                    </li>
                </ul>
            </nav>
        </header>
        // <h1>Hello World</h1>
    );
};


export default MainNavigation;