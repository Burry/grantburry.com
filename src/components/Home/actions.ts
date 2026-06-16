import {
  faUsdSquare,
  faEnvelopeSquare,
  faSirenOn
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faLinkedin,
  faXTwitter,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'

type Action = {
  text: string
  link?: string
  target?: string
  // Tailwind classes for the link (background + text colour)
  linkClassName: string
  icon: IconProp
  // Tailwind classes for the icon (colour + FontAwesome duotone CSS vars)
  iconClassName: string
}

const actions: Action[][] = [
  [
    {
      text: 'Stalk me',
      link: 'https://www.linkedin.com/in/burry/',
      linkClassName: 'bg-[#0a66c2] text-[#fff]',
      icon: faLinkedin,
      iconClassName: 'text-[#fff] [--fa-primary-color:#fff]'
    },
    {
      text: 'Ratio me',
      link: 'https://x.com/grantburry',
      linkClassName: 'bg-[#000] text-[#fff]',
      icon: faXTwitter,
      iconClassName: 'text-[#fff] [--fa-primary-color:#fff]'
    },
    {
      text: 'Fork me',
      link: 'https://github.com/Burry/grantburry.com',
      linkClassName: 'bg-[#fff] text-[#212529]',
      icon: faGithubSquare,
      iconClassName: 'text-[#212529] [--fa-primary-color:#212529]'
    }
  ],
  [
    {
      text: 'Spam me',
      link: 'mailto:grant@burry.me?subject=Hello!',
      target: '_self',
      linkClassName: 'bg-[#eee] text-[#212529]',
      icon: faEnvelopeSquare,
      iconClassName:
        'text-[#fff] [--fa-primary-color:#fff] [--fa-secondary-color:#09f]'
    },
    {
      text: 'Bribe me',
      link: 'https://cash.app/$grant',
      linkClassName: 'bg-[limegreen] text-[#fff]',
      icon: faUsdSquare,
      iconClassName:
        'text-[limegreen] [--fa-primary-color:limegreen] [--fa-secondary-color:#fff]'
    },
    {
      text: 'Arrest me',
      link: 'https://tips.fbi.gov',
      linkClassName: 'bg-[#f00] text-[#fff]',
      icon: faSirenOn,
      iconClassName:
        'text-[#fff] [--fa-primary-color:#fff] [--fa-secondary-color:#0cf]'
    }
  ]
]

export default actions
