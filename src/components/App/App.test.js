import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const Component = (
    <MemoryRouter>
        <App />
    </MemoryRouter>
);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
});
