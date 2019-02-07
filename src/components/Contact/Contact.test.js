import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Contact from './Contact';

const Component = (
    <MemoryRouter>
        <Contact />
    </MemoryRouter>
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
});
