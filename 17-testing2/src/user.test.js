import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import User from './user';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test("renders user data", async () => {

    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve(fakeUser)
        })
    });

    await act(async () => {
        render(<User id="123" />, container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
    expect(container.querySelector("strong").textConten).toBe(fakeUser.age);
    expect(container.textContent).toContain(fakUser.address);

    global.fecth.mockRestore();
});