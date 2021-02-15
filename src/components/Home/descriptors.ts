import {
    faFire,
    faPastafarianism,
    faTrophy,
    faUserHeadset,
    faCube,
    faSackDollar,
    faChartLineDown,
    faRunning,
    faSoup,
    faFlagUsa
} from '@fortawesome/pro-duotone-svg-icons';
import { ListData } from '../../../types/listData';

const descriptors: ListData = [
    [
        {
            text: 'Datacenter arsonist',
            icon: {
                type: faFire,
                colors: {
                    primary: 'var(--tertiary-color)',
                    secondary: 'var(--primary-color)'
                }
            }
        },
        {
            text: 'Spaghetti programmer',
            icon: {
                type: faPastafarianism,
                colors: {
                    primary: '#fff',
                    secondary: '#f90'
                }
            }
        },
        {
            text: 'Middle school science fair winner',
            icon: {
                type: faTrophy,
                colors: {
                    primary: '#ffd700',
                    secondary: '#daa520'
                }
            }
        },
        {
            text: 'Involuntary IT specialist',
            icon: {
                type: faUserHeadset,
                colors: {
                    primary: '#a0f',
                    secondary: '#808080'
                }
            }
        },
        {
            text: 'Proud cube-earther',
            icon: {
                type: faCube,
                colors: {
                    primary: '#00b7eb',
                    secondary: '#00b7eb'
                }
            }
        }
    ],
    [
        {
            text: 'Free market communist',
            icon: {
                type: faSackDollar,
                colors: {
                    primary: 'transparent',
                    secondary: '#ffd700'
                }
            }
        },
        {
            text: 'GameStop shareholder',
            icon: {
                type: faChartLineDown,
                colors: {
                    primary: '#f00',
                    secondary: '#808080'
                }
            }
        },
        {
            text: 'Two-time marathon spectator',
            icon: {
                type: faRunning,
                colors: {
                    primary: '#0f0',
                    secondary: '#0f0'
                }
            }
        },
        {
            text: 'Skilled ramen microwaver',
            icon: {
                type: faSoup,
                colors: {
                    primary: '#800020',
                    secondary: '#808080'
                }
            }
        },
        {
            text: 'Featured on 10+ intelligence agency watchlists',
            icon: {
                type: faFlagUsa,
                colors: {
                    primary: '#09f',
                    secondary: '#f22'
                }
            }
        }
    ]
];

export default descriptors;
