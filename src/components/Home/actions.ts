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
import { ListData } from './listData';

const actions: ListData = [
    [
        {
            text: 'Hire me',
            link: 'https://www.linkedin.com/in/burry/',
            icon: {
                type: faLinkedin,
                colors: {
                    primary: '#0a66c2',
                },
            },
        },
        {
            text: 'Cancel me',
            link: 'https://twitter.com/intent/tweet?text=grantburry.com',
            icon: {
                type: faTwitterSquare,
                colors: {
                    primary: '#1DA1F2',
                },
            },
        },
        {
            text: 'Fork me',
            link: 'https://github.com/Burry',
            icon: {
                type: faGithubSquare,
                colors: {
                    primary: 'white',
                    secondary: 'white',
                },
            },
        },
    ],
    [
        {
            text: 'Spam me',
            link: 'mailto:grant@burry.me?subject=Hello!',
            target: '_self',
            icon: {
                type: faEnvelopeSquare,
                colors: {
                    primary: '#eee',
                    secondary: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            text: 'Bribe me',
            link: 'https://cash.app/$grant',
            icon: {
                type: faUsdSquare,
                colors: {
                    primary: 'white',
                    secondary: 'limegreen',
                },
            },
        },
        {
            text: 'Arrest me',
            link: 'https://tips.fbi.gov',
            icon: {
                type: faSirenOn,
                colors: {
                    primary: '#fff',
                    secondary: '#f00',
                },
            },
        },
    ],
];

export default actions;
