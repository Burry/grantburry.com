import { NextPage } from 'next'
import Error from '@/components/Error'

const NotFoundPage: NextPage = () => <Error statusCode={404} />

export default NotFoundPage
