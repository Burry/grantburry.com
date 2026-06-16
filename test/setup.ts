import { afterEach, expect } from 'bun:test'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Wire the jest-dom matchers (toBeInTheDocument, etc.) into Bun's expect, and
// unmount React trees after each test.
expect.extend(matchers)
afterEach(cleanup)
