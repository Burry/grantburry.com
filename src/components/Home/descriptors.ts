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
} from '@fortawesome/pro-duotone-svg-icons'
import type { ListData } from '../../../types/listData'

const descriptors: ListData = [
  [
    {
      text: 'Datacenter arsonist',
      icon: faFire,
      iconClassName:
        'text-[#FF5500] [--fa-primary-color:#FF5500] [--fa-secondary-color:#FF0000]'
    },
    {
      text: 'Spaghetti programmer',
      icon: faPastafarianism,
      iconClassName:
        'text-[#fff] [--fa-primary-color:#fff] [--fa-secondary-color:#f90]'
    },
    {
      text: 'Middle school science fair winner',
      icon: faTrophy,
      iconClassName:
        'text-[#ffd700] [--fa-primary-color:#ffd700] [--fa-secondary-color:#daa520]'
    },
    {
      text: 'Involuntary IT specialist',
      icon: faUserHeadset,
      iconClassName:
        'text-[#a0f] [--fa-primary-color:#a0f] [--fa-secondary-color:#a0f]'
    },
    {
      text: 'Proud cube-earther',
      icon: faCube,
      iconClassName:
        'text-[#00b7eb] [--fa-primary-color:#00b7eb] [--fa-secondary-color:#00b7eb]'
    }
  ],
  [
    {
      text: 'Free market communist',
      icon: faSackDollar,
      iconClassName:
        'text-[transparent] [--fa-primary-color:transparent] [--fa-secondary-color:#ffd700]'
    },
    {
      text: 'GameStop shareholder',
      icon: faChartLineDown,
      iconClassName:
        'text-[#f00] [--fa-primary-color:#f00] [--fa-secondary-color:#808080]'
    },
    {
      text: 'Two-time marathon spectator',
      icon: faRunning,
      iconClassName:
        'text-[#0f0] [--fa-primary-color:#0f0] [--fa-secondary-color:#0f0]'
    },
    {
      text: 'Skilled ramen microwaver',
      icon: faSoup,
      iconClassName:
        'text-[#800020] [--fa-primary-color:#800020] [--fa-secondary-color:#808080]'
    },
    {
      text: 'Featured on 10+ intelligence agency watchlists',
      icon: faFlagUsa,
      iconClassName:
        'text-[#09f] [--fa-primary-color:#09f] [--fa-secondary-color:#f22]'
    }
  ]
]

export default descriptors
