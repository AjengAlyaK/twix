import styled from 'styled-components';

export const Topbar = styled.div`
    align-items: center;
    /* background-color: #2d3e50; */
    background-color: #1da1f2;
    background-color: var(--secondary);
    color: #fff;
    color: var(--primary);
    display: flex;
    min-height: 64px;
    top: 0;
    z-index: 1;
    position: fixed;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    color: var(--primary);
    font-size: 24px;
    font-weight: 400;
    margin-left: 32px;
    text-transform: uppercase
`;

