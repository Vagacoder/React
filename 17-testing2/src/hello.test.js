import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Hello from './hello';

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

test("renders with or without a name", () =>{
    act(()=>{
        render(<Hello / >, container);
    });

    expect(container.textContent).toBe("Hey, stranger");
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

    act(() => {
        render(<Hello name="Jenny" />, container);
    });
    expect(container.textContent).toBe("Hello, Jenny!");
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

    act(() =>{
        render(<Hello name="Margaret" />, container);
    });

    expect(container.textContent).toBe("Hello, Margaret!");
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

});
