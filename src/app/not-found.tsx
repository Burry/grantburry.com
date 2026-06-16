import ErrorView from '@/components/Error'

export default function NotFound() {
  return <ErrorView statusCode={404} />
}
