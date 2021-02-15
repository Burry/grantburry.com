import React from 'react';
import { render } from '@testing-library/react';
import { default as Home } from '../../src/pages/index';

describe('Home page', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Home />, {});
        expect(asFragment()).toMatchSnapshot();
    });
});
