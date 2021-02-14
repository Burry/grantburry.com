import {
    faUsdSquare,
    faEnvelopeSquare,
    faSirenOn,
} from '@fortawesome/pro-duotone-svg-icons';
import {
    faLinkedin,
    faTwitterSquare,
    faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ActionListItemProps } from './styled-home';

type Actions = Array<
    Array<
        {
            text: string;
            link?: string;
            target?: string;
            icon: {
                type: IconProp;
                colors: {
                    primary: string;
                    secondary?: string;
                };
            };
        } & ActionListItemProps
    >
>;

const actions: Actions = [
    [
        {
            text: 'Hire me',
            background: '#0a66c2',
            link: 'https://www.linkedin.com/in/burry/',
            icon: {
                type: faLinkedin,
                colors: {
                    primary: '#fff',
                },
            },
        },
        {
            text: 'Cancel me',
            background: '#1DA1F2',
            link: 'https://twitter.com/grantburry',
            icon: {
                type: faTwitterSquare,
                colors: {
                    primary: '#fff',
                },
            },
        },
        {
            text: 'Fork me',
            background: '#fff',
            color: '#212529',
            link: 'https://github.com/Burry/grantburry.com',
            icon: {
                type: faGithubSquare,

                colors: {
                    primary: '#212529',
                },
            },
        },
    ],
    [
        {
            text: 'Spam me',
            background: '#eee',
            color: '#212529',
            link: 'mailto:grant@burry.me?subject=Hello!',
            target: '_self',
            icon: {
                type: faEnvelopeSquare,
                colors: {
                    primary: '#fff',
                    secondary: '#09f',
                },
            },
        },
        {
            text: 'Bribe me',
            link: 'https://cash.app/$grant',
            background: 'limegreen',
            icon: {
                type: faUsdSquare,
                colors: {
                    primary: 'limegreen',
                    secondary: '#fff',
                },
            },
        },
        {
            text: 'Arrest me',
            background: '#f00',
            link: 'https://tips.fbi.gov',
            icon: {
                type: faSirenOn,
                colors: {
                    primary: '#fff',
                    secondary: '#0cf',
                },
            },
        },
    ],
];

export default actions;
