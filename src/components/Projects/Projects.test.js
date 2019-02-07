import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Projects from './Projects';

const Component = (
    <MemoryRouter>
        <Projects />
    </MemoryRouter>
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
});
