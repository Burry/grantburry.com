import Index from '@/pages/index'
import { render } from '../render'

describe('Index', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Index />)

    expect(container).toMatchSnapshot()
  })
})
