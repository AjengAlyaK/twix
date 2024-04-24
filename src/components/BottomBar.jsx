// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavItem, NavItemIcon } from "../styles/styledBottomBar";


const BottomBar = () => {
    const navigate = useNavigate();
    const onLeaderboards = () => {
        navigate('/leaderboards')
    }

    const onThreads = () => {
        navigate('/');
    }
    return (
        <>
            <NavItem type="button" onClick={onThreads}>
                <NavItemIcon><svg stroke="currentColor" fill="currentColor"
                    strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z">
                    </path>
                </svg></NavItemIcon>
                <p className="navigation-item__label">Threads</p>
            </NavItem>
            <NavItem type="button" onClick={onLeaderboards}>
                <NavItemIcon><svg stroke="currentColor" fill="currentColor"
                    strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path>
                </svg></NavItemIcon>
                <p className="navigation-item__label">Leaderboards</p>
            </NavItem>
        </>
    );
};

export default BottomBar;