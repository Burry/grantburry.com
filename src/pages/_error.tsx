import { NextPage } from 'next'
import Error, { ErrorProps } from '@/components/Error'

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => (
  <Error statusCode={statusCode} />
)

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode
  if (res) statusCode = res.statusCode
  else if (err) statusCode = err.statusCode
  return { statusCode }
}

export default ErrorPage
