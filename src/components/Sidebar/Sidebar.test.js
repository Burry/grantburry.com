import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

const Component = (
    <MemoryRouter>
        <Sidebar />
    </MemoryRouter>
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
});
