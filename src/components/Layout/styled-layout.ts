import styled, { css } from 'styled-components';

export const fullAbsPseudo = css`
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;

// Sections
const section = css`
    position: relative;

    &:before {
        ${fullAbsPseudo}
        transform: skewY(var(--diagonal-angle));
    }
`;

const primary = css`
    background: linear-gradient(
        45deg,
        var(--primary-color),
        var(--secondary-color)
    );
`;

const secondary = css`
    background: linear-gradient(
        45deg,
        var(--secondary-color),
        var(--tertiary-color)
    );
`;

export type StyledSectionProps = {
    gradient?: boolean;
};

export const StyledSection = styled.section<StyledSectionProps>`
    ${section}
    ${({ gradient }) =>
        gradient
            ? css`
                  text-shadow: none;
                  &:before {
                      ${secondary}
                  }
              `
            : ''}
`;

export const StyledHeader = styled.header`
    ${section}
    text-shadow: none;
    margin-top: -10%;
    padding-top: 10%;

    &:before {
        ${primary}
    }
`;

export const StyledFooter = styled.footer`
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 200;
    color: rgba(255, 255, 255, 0.5);
`;

export const StyledContent = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    padding: 6rem 3rem;
    text-align: center;

    @media screen and (max-width: 760px) {
        padding: 3rem;
    }

    @media screen and (max-width: 320px) {
        padding: 3rem 1rem;
    }
`;

export const StyledMain = styled.main``;

// Grid
export const Row = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 760px) {
        flex-direction: column;
    }
`;

export const FlexList = styled.ul`
    margin: 1rem;
    max-width: calc(50% - 4rem);
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    list-style: none;
    padding: 0;

    @media screen and (max-width: 760px) {
        max-width: 100%;

        &:first-child {
            margin: 1rem 1rem 0 1rem;
        }

        &:last-child {
            margin: 0 1rem 1rem 1rem;
        }
    }
`;

// Buttons
export const StyledButton = styled.button`
    ${secondary}
    border: 0;
    color: var(--white);
    font-size: 2rem;
    padding: 0.75rem 1.5rem;
    min-width: 200px;
    border-radius: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    position: relative;
    transform: skewX(var(--diagonal-angle));

    &:focus {
        background: var(--tertiary-color);
    }

    @media (hover) {
        &:hover {
            background: var(--tertiary-color);
        }
    }

    &:active {
        ${primary}
    }
`;

export const StyledButtonGroup = styled.div`
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin: 0 1rem;
    }

    @media screen and (max-width: 760px) {
        flex-direction: column;

        > * {
            margin: 1rem;
        }
    }
`;

// Icons
export const IconContainer = styled.div`
    min-width: 3.5rem;
`;

export const IconTextParagraph = styled.p`
    margin: 0 0 0 0.5rem;
`;
