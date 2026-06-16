'use client'

import { useState } from 'react'
import {
  faEyeSlash,
  faEye,
  faClipboard,
  faCheck
} from '@fortawesome/pro-duotone-svg-icons'
import { Button } from '../Layout'
import pgp from './pgp.key'

let copyTimeout: number

export const PgpSection = () => {
  const [copiedPgp, setCopiedPgp] = useState(false)
  const [showPgp, setShowPgp] = useState(false)

  const handleCopyPgp = async (): Promise<void> => {
    await navigator.clipboard.writeText(pgp)
    clearTimeout(copyTimeout)
    setCopiedPgp(true)
    copyTimeout = window.setTimeout(() => {
      setCopiedPgp(false)
    }, 3000)
  }

  const handleTogglePgp = () => setShowPgp((prev) => !prev)

  return (
    <>
      <h2>Encrypt Stuff</h2>
      <p>I have no real use for a PGP key, but they look cool.</p>
      <div className="mb-4 flex items-center justify-center gap-x-8 max-[760px]:flex-col max-[760px]:gap-y-8">
        <Button
          icon={copiedPgp ? faCheck : faClipboard}
          onClick={handleCopyPgp}
        >
          {copiedPgp ? 'Copied' : 'Copy'}
        </Button>
        <Button
          icon={showPgp ? faEyeSlash : faEye}
          onClick={handleTogglePgp}
          aria-expanded={showPgp}
          aria-controls="pgp-key"
        >
          {showPgp ? 'Hide' : 'Show'}
        </Button>
      </div>
      <pre
        id="pgp-key"
        aria-hidden={!showPgp}
        className={`mx-auto w-fit max-w-full overflow-x-scroll overflow-y-hidden text-[12px] leading-[12px] whitespace-pre-wrap transition-[height] duration-1000 select-all ${
          showPgp ? 'h-auto border border-white/10 p-4' : 'h-0 border-0 p-0'
        }`}
      >
        {pgp}
      </pre>
    </>
  )
}
