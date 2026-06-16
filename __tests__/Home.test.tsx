import { describe, expect, it } from 'bun:test'
import { render, screen } from '@testing-library/react'
import Home from '@/components/Home/Home'

describe('Home', () => {
  it('renders the name, the refreshed joke, and the social links', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Grant Burry' })
    ).toBeInTheDocument()
    expect(screen.getByText(/ship it straight to prod/iu)).toBeInTheDocument()

    const x = screen.getByRole('link', { name: /Ratio me/iu })
    expect(x).toHaveAttribute('href', 'https://x.com/grantburry')
    expect(screen.getByRole('link', { name: /Stalk me/iu })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Fork me/iu })).toBeInTheDocument()
  })
})
