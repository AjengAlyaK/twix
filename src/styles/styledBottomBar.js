import styled from 'styled-components';

export const NavigationBottom = styled.div`
    align-items: center;
    background-color: #fff;
    background-color: var(--primary);
    border-top: 1px solid #d1d5db;
    bottom: 0;
    display: flex;
    justify-content: center;
    min-height: 64px;
    position: fixed;
    width: 100%;
    z-index: 2
`;

export const Nav = styled.nav`
    display: flex;
    gap: 48px
`;

export const NavItem = styled.button`
    align-items: center;
    background-color: initial;
    border: 0;
    color: #2d3e50;
    color: var(--secondary);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center
`;

export const NavItemIcon = styled.div`
    font-size: 24px
`;
