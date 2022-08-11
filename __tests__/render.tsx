import React, { ReactNode, ReactElement } from 'react'
import {
  render as baseRender,
  queries,
  Queries,
  RenderOptions
} from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const render = <
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: ReactElement,
  options?: RenderOptions<Q, Container, BaseElement>
) => baseRender(ui, { wrapper: Providers, ...options })
