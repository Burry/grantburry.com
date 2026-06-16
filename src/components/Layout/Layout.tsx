import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contentClass =
  'relative mx-auto max-w-[1200px] px-12 py-24 text-center max-[760px]:px-8 max-[760px]:py-16 max-[350px]:px-4 max-[350px]:py-14'

// Shared anchor affordance: the skew + the » glyph, used by both inline text
// links and the social buttons.
export const linkAffordance =
  "relative box-decoration-clone skew-x-[-5deg] no-underline after:relative after:top-[0.125rem] after:ml-2 after:text-[3rem] after:leading-[0] after:content-['»'] max-[760px]:after:text-[2rem]"

// Inline text link (FAQ prose, the "Go Home" link).
export const linkClass = `${linkAffordance} inline-block bg-white/25 px-1 text-chalk hover:bg-white/15 focus:bg-white/15 active:bg-black/15`

const headingSize = {
  1: 'text-[3em]',
  2: 'text-[2em]',
  3: 'text-[1.5em]'
} as const

type HeadingProps = {
  level: 1 | 2 | 3
  children: ReactNode
}

export const Heading = ({ level, children }: HeadingProps) => {
  const className = `mx-auto mb-4 font-black text-white uppercase ${headingSize[level]}`
  if (level === 1) return <h1 className={className}>{children}</h1>
  if (level === 2) return <h2 className={className}>{children}</h2>
  return <h3 className={className}>{children}</h3>
}

type SectionProps = { gradient?: boolean; children: ReactNode }

export const Section = ({ children, gradient = false }: SectionProps) => (
  <section
    className={`relative ${
      gradient
        ? "[text-shadow:none] before:absolute before:inset-0 before:skew-y-[-5deg] before:bg-[linear-gradient(45deg,var(--color-secondary),var(--color-tertiary))] before:content-['']"
        : ''
    }`}
  >
    <div className={contentClass}>{children}</div>
  </section>
)

type HeaderProps = { children: ReactNode }

export const Header = ({ children }: HeaderProps) => (
  <header className="relative -mt-[10%] pt-[10%] [text-shadow:none] before:absolute before:inset-0 before:skew-y-[-5deg] before:bg-[linear-gradient(45deg,var(--color-primary),var(--color-secondary))] before:content-['']">
    <div className={contentClass}>{children}</div>
  </header>
)

export const Footer = () => (
  <footer className="text-base font-extralight tracking-[2px] text-white/50 uppercase">
    <div className={contentClass}>
      &copy; {new Date().getFullYear()} Grant Burry
    </div>
  </footer>
)

type ButtonProps = {
  icon: IconProp
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ children, icon, onClick, ...rest }: ButtonProps) => (
  <button
    {...rest}
    type="button"
    onClick={onClick}
    className="relative flex min-w-[200px] skew-x-[-5deg] cursor-pointer items-center justify-center rounded-none border-0 py-3 pr-6 pl-2 text-[2rem] text-chalk bg-[linear-gradient(45deg,var(--color-secondary),var(--color-tertiary))] hover:bg-none hover:bg-tertiary focus:bg-none focus:bg-tertiary active:bg-[linear-gradient(45deg,var(--color-primary),var(--color-secondary))]"
  >
    <div className="min-w-14">
      <FontAwesomeIcon icon={icon} />
    </div>
    <p className="m-0 ml-2">{children}</p>
  </button>
)
