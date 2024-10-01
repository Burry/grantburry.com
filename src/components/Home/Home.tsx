import { useState, ReactNode, HTMLProps } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
  faEyeSlash,
  faEye,
  faQuestionSquare
} from '@fortawesome/pro-duotone-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { faClipboard, faCheck } from '@fortawesome/pro-duotone-svg-icons'
import {
  LogoContainer,
  Logo,
  IconListItem,
  Icon,
  CustomIconProps,
  FAQ,
  ActionListItem,
  PGP
} from './styled-home'
import {
  Header,
  Footer,
  Section,
  Row,
  FlexList,
  Button,
  StyledButtonGroup,
  IconContainer,
  IconTextParagraph
} from '../Layout'
import descriptors from './descriptors'
import actions from './actions'
import pgp from './pgp.key'

type ExternalLinkProps = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode
}

const ExternalLink = ({ children, target, ...props }: ExternalLinkProps) => (
  <a target={target || '_blank'} rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

type LineProps = {
  children: ReactNode
  icon: CustomIconProps & { type: IconProp }
}

export const Line = ({ children, icon }: LineProps) => (
  <IconListItem>
    <IconContainer>
      <Icon icon={icon.type} colors={icon.colors} size="lg" fixedWidth />
    </IconContainer>
    <IconTextParagraph>{children}</IconTextParagraph>
  </IconListItem>
)

const white = '${({ theme }) => theme.colors.white}'

Line.defaultProps = {
  icon: {
    type: faQuestionSquare,
    colors: { primary: white, secondary: white }
  }
}

let copyTimeout: number

const Home = () => {
  const [copiedPgp, setCopiedPgp] = useState(false)
  const [showPgp, setShowPgp] = useState(false)

  const handleCopyPgp = (): void => {
    clearTimeout(copyTimeout)
    setCopiedPgp(true)
    copyTimeout = window.setTimeout(() => {
      setCopiedPgp(false)
    }, 3000)
  }

  const handleTogglePgp = () => setShowPgp(prev => !prev)

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo src="/logo.svg" alt="GB" />
        </LogoContainer>
      </Header>
      <div>
        <Section>
          <h1>Grant Burry</h1>
          <Row>
            {descriptors.map((column, idx) => (
              <FlexList key={idx}>
                {column.map(({ text, icon }) => (
                  <Line key={text} icon={icon}>
                    {text}
                  </Line>
                ))}
              </FlexList>
            ))}
          </Row>
        </Section>
        <Section gradient>
          <h2>FAQ</h2>
          <FAQ>
            <h3>Who are you?</h3>
            <p>
              I make things with computers, and sometimes they work. I&apos;m a
              nerd from Seattle who writes lots of JavaScript because I need
              instant gratification.
            </p>
            <p>
              In my free time I doom-scroll clickbait headlines and strategize
              how to get an extra 0.25% off my next Wi-Fi connected toothbrush.
            </p>
          </FAQ>
          <FAQ>
            <h3>What do you do?</h3>
            <p>
              I&apos;m helping build software at{' '}
              <ExternalLink href="https://evolve.com">Evolve</ExternalLink> to
              make vacation rentals easy for everyone. I&apos;m the co-founder
              of{' '}
              <ExternalLink href="https://app.me4u.ai/home/me4u_grant">
                Me4U
              </ExternalLink>
              , using AI to build meaningful connections between creators and
              their fans. I&apos;ve also worked in software roles at{' '}
              <ExternalLink href="https://fireblocks.com">
                Fireblocks
              </ExternalLink>
              ,{' '}
              <ExternalLink href="https://www.bigspring.io">
                BigSpring
              </ExternalLink>
              ,<ExternalLink href="https://www.vmware.com">VMware</ExternalLink>
              , and a few{' '}
              <ExternalLink href="https://github.com/Burry">
                other projects
              </ExternalLink>
              .
            </p>
            <p>
              You can see my{' '}
              <ExternalLink href="https://www.linkedin.com/in/burry">
                LinkedIn
              </ExternalLink>{' '}
              for more.
            </p>
          </FAQ>
        </Section>
        <Section>
          <h2>Hyperlinks</h2>
          <Row>
            {actions.map((column, idx) => (
              <FlexList key={idx}>
                {column.map(
                  ({ icon, background, color, text, link, target }) => (
                    <ActionListItem
                      key={text}
                      background={background}
                      color={color}
                    >
                      <ExternalLink href={link} target={target}>
                        <IconContainer>
                          <Icon
                            icon={icon.type}
                            colors={icon.colors}
                            size="lg"
                            fixedWidth
                          />
                        </IconContainer>
                        <IconTextParagraph>{text}</IconTextParagraph>
                      </ExternalLink>
                    </ActionListItem>
                  )
                )}
              </FlexList>
            ))}
          </Row>
          <br />
          <br />
          <h2>Encrypt Stuff</h2>
          <p>I have no real use for a PGP key, but they look cool.</p>
          <StyledButtonGroup>
            <CopyToClipboard text={pgp} onCopy={handleCopyPgp}>
              <Button icon={copiedPgp ? faCheck : faClipboard}>
                {copiedPgp ? 'Copied' : 'Copy'}
              </Button>
            </CopyToClipboard>
            <Button
              icon={showPgp ? faEyeSlash : faEye}
              onClick={handleTogglePgp}
            >
              {showPgp ? 'Hide' : 'Show'}
            </Button>
          </StyledButtonGroup>
          <PGP show={showPgp}>{pgp}</PGP>
        </Section>
      </div>
      <Footer />
    </>
  )
}

export default Home
