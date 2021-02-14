import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Logo
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem auto;

    @media screen and (max-width: 760px) {
        margin: 3.5rem auto;
    }

    @media screen and (max-width: 350px) {
        margin: 1rem auto;
    }
`;

export const Logo = styled.img`
    max-width: 300px;
    user-drag: none;
    user-select: none;

    @media screen and (max-width: 760px) {
        max-width: 200px;
    }
`;

// Lines
export const IconListItem = styled.li`
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 1rem 0;
`;

export type CustomIconProps = {
    colors: {
        primary: string;
        secondary?: string;
    };
};

export const Icon = styled(FontAwesomeIcon)<CustomIconProps>`
    color: ${({ colors }) => colors.primary};
    --fa-primary-color: ${({ colors }) => colors.primary};
    ${({ colors }) =>
        colors.secondary ? `--fa-secondary-color: ${colors.secondary}` : ''};
    --fa-primary-opacity: 1;
    --fa-secondary-opacity: 1;
`;

// Actions
export type ActionListItemProps = {
    background: string;
    color?: string;
};

export const ActionListItem = styled.li<ActionListItemProps>`
    width: 100%;
    display: flex;
    position: relative;
    text-shadow: none !important;

    a {
        color: ${({ color }) => color || '#fff'};
        background-color: ${({ background }) => background};
        padding: 1.5rem;
        width: 100%;
        display: flex;
        align-items: center;

        &:focus {
            opacity: 0.8;
            background-color: ${({ background }) => background};
        }

        @media (hover) {
            &:hover {
                opacity: 0.8;
                background-color: ${({ background }) => background};
            }
        }

        &:active {
            opacity: 0.7;
            background-color: ${({ background }) => background};
        }

        &:after {
            line-height: initial;
            top: -0.125rem;
        }

        @media screen and (min-width: 760px) and (max-width: 760px) {
            padding: 1.5rem 0;
        }
    }

    @media screen and (max-width: 760px) {
        margin: 0.5rem auto;
    }

    @media screen and (min-width: 760px) {
        &:first-of-type {
            left: 9px;
        }

        &:last-of-type {
            left: -9px;
        }
    }
`;

// FAQ
export const FAQ = styled.div`
    text-align: left;
    margin-bottom: 3.5rem;

    &:last-child {
        margin: 0;
    }
`;

// PGP Key Block
type PGPProps = {
    show?: boolean;
};

export const PGP = styled.pre<PGPProps>`
    border: ${({ show }) => (show ? 'solid 1px rgba(255, 255, 255, 0.1)' : 0)};
    padding: ${({ show }) => (show ? '1rem' : 0)};
    height: ${({ show }) => (show ? 'auto' : 0)};
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    white-space: pre-wrap;
    font-size: 12px;
    line-height: 14px;
    overflow-x: scroll;
    overflow-y: hidden;
    transition: height 1s ease;
    user-select: all;
`;
