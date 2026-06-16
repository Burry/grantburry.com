import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExclamationTriangle,
  faQuestionCircle
} from '@fortawesome/pro-duotone-svg-icons'
import { Header, Footer, Section } from './Layout'

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
        <h1>
          <FontAwesomeIcon
            icon={statusCode === 404 ? faQuestionCircle : faExclamationTriangle}
          />
          <br />
          {statusCode}
        </h1>
      </Header>
      <div>
        <Section>
          <h2>{message}</h2>
          <p>
            {statusCode === 404
              ? "This page isn't a thing. You clicked on a bad link or fat-fingered your keyboard. Please consider the life choices that brought you here and then don't do them again."
              : 'Please try again'}
          </p>
          <Link href="/">Go Home</Link>
        </Section>
      </div>
      <Footer />
    </>
  )
}

export default ErrorView
