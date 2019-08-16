import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})


it('renders user data', async () => {
    const fakeUser = {
        name: 'Jono Baez',
        age: "31",
        address: "123, charming avenue"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        }));

    await act(async () => {
        render(<App id='123' />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textContent).toBe(fakeUser.age + ' years old');
    expect(container.textContent).toContain(fakeUser.address);

    global.fetch.mockRestore();
});

