import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationTriangle,
  faQuestionCircle
} from '@fortawesome/pro-duotone-svg-icons'
import { Header, Footer, Section, Heading, linkClass } from './Layout'

export type ErrorProps = {
  statusCode?: number
}

const friendlyError = (statusCode: ErrorProps['statusCode']) => {
  switch (statusCode) {
    case 404: {
      return 'Not Found'
    }
    case 400: {
      return 'Bad Request'
    }
    case 500: {
      return 'Server Error'
    }
    default: {
      return 'Unknown Error'
    }
  }
}

const ErrorView = ({ statusCode }: ErrorProps) => {
  const message = friendlyError(statusCode)
  return (
    <>
      <Header>
        <Heading level={1}>
          <FontAwesomeIcon
            icon={statusCode === 404 ? faQuestionCircle : faExclamationTriangle}
          />
          <br />
          {statusCode}
        </Heading>
      </Header>
      <main>
        <Section>
          <Heading level={2}>{message}</Heading>
          <p className="my-[1em]">
            {statusCode === 404
              ? "This page isn't a thing. You clicked on a bad link or fat-fingered your keyboard. Please consider the life choices that brought you here and then don't do them again."
              : 'Please try again'}
          </p>
          <Link href="/" className={linkClass}>
            Go Home
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default ErrorView
