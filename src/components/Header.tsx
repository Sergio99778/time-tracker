import React from 'react';
import './Header.css';



export const Header: React.FC = () => {
    return (
        <header className='header'>
            <h1>Time-Tracker-Project</h1>
            <ul className='header-list'>
                <a>Track time</a>
                <a>Projects</a>
            </ul>
        </header>
    );
};
