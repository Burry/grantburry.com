import type { ReactNode, HTMLProps } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionSquare } from '@fortawesome/pro-duotone-svg-icons'
import { Header, Footer, Section } from '../Layout'
import { PgpSection } from './PgpSection'
import descriptors from './descriptors'
import actions from './actions'

// FontAwesome duotone opacity vars, applied to every icon.
const iconVars = '[--fa-primary-opacity:1] [--fa-secondary-opacity:1]'

const rowClass = 'mx-auto flex w-full justify-center max-[760px]:flex-col'
const listClass =
  'my-4 flex w-full list-none flex-col items-start justify-start p-0 text-left max-[760px]:first:mt-4 max-[760px]:first:mb-0 max-[760px]:last:mt-0 max-[760px]:last:mb-4'

const defaultIconClassName =
  'text-[#fff] [--fa-primary-color:#fff] [--fa-secondary-color:#fff]'

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
  icon?: IconProp
  iconClassName?: string
}

export const Line = ({
  children,
  icon = faQuestionSquare,
  iconClassName = defaultIconClassName
}: LineProps) => (
  <li className="my-4 flex items-start justify-start">
    <div className="min-w-14">
      <FontAwesomeIcon
        icon={icon}
        className={`${iconVars} ${iconClassName}`}
        size="lg"
        fixedWidth
      />
    </div>
    <p className="m-0 ml-2">{children}</p>
  </li>
)

const Home = () => (
  <>
    <Header>
      <div className="mx-auto my-20 flex items-center justify-center max-[760px]:my-14 max-[350px]:my-4">
        <img
          src="/logo.svg"
          alt="Grant Burry"
          width={300}
          height={176}
          fetchPriority="high"
          className="max-w-[300px] select-none [-webkit-user-drag:none] max-[760px]:max-w-[200px]"
        />
      </div>
    </Header>
    <main>
      <Section>
        <h1>Grant Burry</h1>
        <div className={rowClass}>
          {descriptors.map((column, idx) => (
            <ul key={idx} className={listClass}>
              {column.map(({ text, icon, iconClassName }) => (
                <Line key={text} icon={icon} iconClassName={iconClassName}>
                  {text}
                </Line>
              ))}
            </ul>
          ))}
        </div>
      </Section>
      <Section gradient>
        <h2>FAQ</h2>
        <div className="mb-14 text-left last:m-0">
          <h3>Who are you?</h3>
          <p>
            I make things with computers, and sometimes they work. I&apos;m a
            nerd from Seattle who writes lots of JavaScript because I need
            instant gratification.
          </p>
          <p>
            In my free time I let AI write code I don&apos;t understand and ship
            it straight to prod.
          </p>
        </div>
        <div className="mb-14 text-left last:m-0">
          <h3>What do you do?</h3>
          <p>
            I&apos;m helping build software at{' '}
            <ExternalLink href="https://evolve.com">Evolve</ExternalLink> to
            make vacation rentals easy for everyone. I&apos;m the co-founder of{' '}
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
            ,<ExternalLink href="https://www.vmware.com">VMware</ExternalLink>,
            and a few{' '}
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
        </div>
      </Section>
      <Section>
        <h2>Hyperlinks</h2>
        <div className={rowClass}>
          {actions.map((column, idx) => (
            <ul key={idx} className={listClass}>
              {column.map(
                ({
                  icon,
                  iconClassName,
                  linkClassName,
                  text,
                  link,
                  target
                }) => (
                  <li
                    key={text}
                    className="relative flex w-full [text-shadow:none] max-[760px]:mx-auto max-[760px]:my-2 min-[760px]:first-of-type:left-[9px] min-[760px]:last-of-type:left-[-9px]"
                  >
                    <ExternalLink
                      href={link}
                      target={target}
                      className={`flex w-full items-center p-6 hover:opacity-80 focus:opacity-80 active:opacity-70 ${linkClassName}`}
                    >
                      <div className="min-w-14">
                        <FontAwesomeIcon
                          icon={icon}
                          className={`${iconVars} ${iconClassName}`}
                          size="lg"
                          fixedWidth
                        />
                      </div>
                      <p className="m-0 ml-2">{text}</p>
                    </ExternalLink>
                  </li>
                )
              )}
            </ul>
          ))}
        </div>
        <br />
        <br />
        <PgpSection />
      </Section>
    </main>
    <Footer />
  </>
)

export default Home
