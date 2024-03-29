import { ReactNode, HTMLProps } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  StyledSection,
  StyledSectionProps,
  StyledHeader,
  StyledFooter,
  StyledContent,
  StyledButton,
  IconContainer,
  IconTextParagraph
} from './styled-layout'

type SectionProps = StyledSectionProps & { children: ReactNode }

export const Section: React.FC<SectionProps> = ({ children, gradient }) => (
  <StyledSection gradient={gradient}>
    <StyledContent>{children}</StyledContent>
  </StyledSection>
)

type HeaderProps = { children: ReactNode }

export const Header = ({ children }: HeaderProps) => (
  <StyledHeader>
    <StyledContent>{children}</StyledContent>
  </StyledHeader>
)

export const Footer = () => (
  <StyledFooter>
    <StyledContent>&copy; {new Date().getFullYear()} Grant Burry</StyledContent>
  </StyledFooter>
)

type ButtonProps = {
  icon: IconProp
} & HTMLProps<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({ children, icon, onClick }) => (
  <StyledButton onClick={onClick}>
    <IconContainer>
      <FontAwesomeIcon icon={icon} />
    </IconContainer>
    <IconTextParagraph>{children}</IconTextParagraph>
  </StyledButton>
)
