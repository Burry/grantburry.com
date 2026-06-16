import type { ReactNode, ComponentPropsWithoutRef } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contentClass =
  'relative mx-auto max-w-[1200px] px-12 py-24 text-center max-[760px]:px-8 max-[760px]:py-16 max-[350px]:px-4 max-[350px]:py-14'

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
