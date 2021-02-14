import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --diagonal-angle: -5deg;
        --diagonal-angle-reverse: 5deg;
        --gradient-angle: 45deg;

        --primary-color: #f00;
        --secondary-color: #f30;
        --tertiary-color: #f50;
        --white: rgba(255, 255, 255, 0.95);
        --black: #212529;

        --font-families-system: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
        --font-families: Inter, var(--font-families-system);
        --font-families-variable: InterVariable, var(--font-families-system);
    }

    html, body, #__next {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--black);
        color: var(--white);
        font-family: var(--font-families);
        font-size: 32px;
        line-height: 1.5;
        text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.5);

        @supports (font-variation-settings: normal) {
            font-family: var(--font-families-variable);
           // font-variation-settings: "wght" 400;
        }

        @media screen and (max-width: 760px) {
            font-size: 24px;
        }

        @media screen and (max-width: 350px) {
            font-size: 18px;
        }
    }

    * {
        -webkit-tap-highlight-color: transparent;
    }

    ::selection {
        background: rgba(255, 255, 255, 0.25);
        color: var(--white);
        text-shadow: none;
    }

    a {
        color: var(--white);
        text-decoration: none;
        background: rgba(255, 255, 255, 0.25) none repeat scroll 0 0;
        box-decoration-break: clone;
        padding: 0 0.25rem;
        transform: skewX(var(--diagonal-angle));
        position: relative;
        display: inline-block;

        &:focus {
            background-color: rgba(255, 255, 255, 0.15);
        }

        @media (hover) {
            &:hover {
                background-color: rgba(255, 255, 255, 0.15);
            }
        }

        &:active {
            background-color: rgba(0, 0, 0, 0.15);
        }

        &:after {
            content: '»';
            margin-left: 0.5rem;
            font-size: 3rem;
            line-height: 0;
            position: relative;
            top: 0.125rem;
        }

        @media screen and (max-width: 760px) {
            &:after {
                font-size: 2rem;
            }
        }
    }

    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 2em;
    }
    h3 {
        font-size: 1.5em;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #fff;
        margin: 0 auto 1rem;
        text-transform: uppercase;
        font-weight: 900;
    }
`;

export default GlobalStyle;
