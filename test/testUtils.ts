import { render } from '@testing-library/react';

const customRender = render;
// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
