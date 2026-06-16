import { describe, expect, it, mock } from 'bun:test'
import { fireEvent, render, screen } from '@testing-library/react'
import { PgpSection } from '@/components/Home/PgpSection'

describe('PgpSection', () => {
  it('toggles the PGP key with the Show / Hide button', async () => {
    render(<PgpSection />)

    fireEvent.click(screen.getByRole('button', { name: 'Show' }))
    expect(
      await screen.findByRole('button', { name: 'Hide' })
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    expect(
      await screen.findByRole('button', { name: 'Show' })
    ).toBeInTheDocument()
  })

  it('copies the PGP key to the clipboard when Copy is clicked', async () => {
    const writeText = mock(() => Promise.resolve())
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true
    })

    render(<PgpSection />)
    fireEvent.click(screen.getByRole('button', { name: 'Copy' }))

    expect(
      await screen.findByRole('button', { name: 'Copied' })
    ).toBeInTheDocument()
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining('PGP'))
  })
})
