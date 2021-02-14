import { useState, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faEyeSlash,
    faEye,
    faQuestionSquare,
} from '@fortawesome/pro-duotone-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { faClipboard, faCheck } from '@fortawesome/pro-duotone-svg-icons';
import {
    LogoContainer,
    Logo,
    IconListItem,
    Icon,
    CustomIconProps,
    FAQ,
    ActionListItem,
    PGP,
} from './styled-home';
import {
    Header,
    Footer,
    Section,
    Row,
    FlexList,
    Button,
    StyledButtonGroup,
    IconContainer,
    IconTextParagraph,
} from '../Layout';
import descriptors from './descriptors';
import actions from './actions';
import pgp from '../../pgp.key';

const getSsn = () => {
    let ssn =
        Math.floor(Math.random() * 8 + 1) +
        Math.random().toString().slice(2, 10);
    ssn = `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 10)}`;
    return ssn;
};

const ExternalLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
    target,
    children,
    ...props
}) => (
    <a target={target || '_blank'} rel="noopener noreferrer" {...props}>
        {children}
    </a>
);

type LineProps = {
    children: React.ReactChild | React.ReactChild[];
    icon: CustomIconProps & { type: IconProp };
};

export const Line: React.FC<LineProps> = ({ children, icon }) => (
    <IconListItem>
        <IconContainer>
            <Icon icon={icon.type} colors={icon.colors} size="lg" fixedWidth />
        </IconContainer>
        <IconTextParagraph>{children}</IconTextParagraph>
    </IconListItem>
);

const white = 'var(--white)';

Line.defaultProps = {
    icon: {
        type: faQuestionSquare,
        colors: { primary: white, secondary: white },
    },
};

let copyTimeout: number;

const Home: React.FC = () => {
    const [ssn, setSsn] = useState('XXX-XX-XXXX');
    const [copiedPgp, setCopiedPgp] = useState(false);
    const [showPgp, setShowPgp] = useState(false);

    const handleCopyPgp = (): void => {
        clearTimeout(copyTimeout);
        setCopiedPgp(true);
        copyTimeout = window.setTimeout(() => {
            setCopiedPgp(false);
        }, 3000);
    };

    const handleTogglePgp = () => setShowPgp((prev) => !prev);

    useEffect(() => {
        setSsn(getSsn());
    }, []);

    return (
        <>
            <Header>
                <LogoContainer>
                    <Logo src="/logo.svg" alt="GB" />
                </LogoContainer>
            </Header>
            <main>
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
                        <h3>Who is this guy?</h3>
                        <p>
                            I make things with computers, and sometimes they
                            work. I&apos;m a nerd from Seattle who writes lots
                            of JavaScript because I need instant gratification.
                        </p>
                        <p>
                            In my free time I doom-scroll clickbait headlines
                            and strategize how to get an extra 0.25% off my next
                            Wi-Fi connected pair of socks.
                        </p>
                    </FAQ>
                    <FAQ>
                        <h3>What do you do?</h3>
                        <p>
                            I&apos;m a software engineer at{' '}
                            <ExternalLink href="https://bigspring.io">
                                BigSpring
                            </ExternalLink>
                            , helping build a new learning platform to drive
                            lifelong skilling. I&apos;ve also worked in
                            development and customer service roles at{' '}
                            <ExternalLink href="https://www.vmware.com">
                                VMware
                            </ExternalLink>
                            , an{' '}
                            <ExternalLink href="http://www.fruitpunch.us">
                                ad production
                            </ExternalLink>{' '}
                            internship, and a few{' '}
                            <ExternalLink href="https://github.com/Burry">
                                other projects
                            </ExternalLink>
                        </p>
                        <p>
                            You can see my{' '}
                            <ExternalLink href="https://www.linkedin.com/in/burry">
                                LinkedIn
                            </ExternalLink>{' '}
                            for more.
                        </p>
                    </FAQ>
                    <FAQ>
                        <h3>What&apos;s your social security number?</h3>
                        <p>
                            <code>{ssn}</code>
                        </p>
                        <p>
                            <ExternalLink href="https://www.responsiblelending.org/research-publication/map-us-payday-interest-rates">
                                Here&apos;s a locator
                            </ExternalLink>{' '}
                            for the highest payday loan interest rates, for your
                            reference.
                        </p>
                    </FAQ>
                    <FAQ>
                        <h3>How do I stop paying Federal taxes?</h3>
                        <p>
                            <ExternalLink href="https://nomadcapitalist.com/second-passport/panama/">
                                This looks promising
                            </ExternalLink>
                        </p>
                    </FAQ>
                </Section>
                <Section>
                    <h2>Do Stuff</h2>
                    <Row>
                        {actions.map((column, idx) => (
                            <FlexList key={idx}>
                                {column.map(
                                    ({
                                        icon,
                                        background,
                                        color,
                                        text,
                                        link,
                                        target,
                                    }) => (
                                        <ActionListItem
                                            key={text}
                                            background={background}
                                            color={color}
                                        >
                                            <ExternalLink
                                                href={link}
                                                target={target}
                                            >
                                                <IconContainer>
                                                    <Icon
                                                        icon={icon.type}
                                                        colors={icon.colors}
                                                        size="lg"
                                                        fixedWidth
                                                    />
                                                </IconContainer>
                                                <IconTextParagraph>
                                                    {text}
                                                </IconTextParagraph>
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
            </main>
            <Footer />
        </>
    );
};

export default Home;
