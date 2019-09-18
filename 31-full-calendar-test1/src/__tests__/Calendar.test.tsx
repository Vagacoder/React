import * as React from 'react';
import { render, RenderResult, queries, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from '../Calendar';

describe('Calendar Tests', () => {
    test('Should render the following components', async () => {
        const calendar = renderCalendar([]);

        expectHTML(calendar).toContainTexts([
            'month',
            'week',
            'day',
            'today',
            'Mon',
            'Tue'
        ])
    });

    test('Should contain the events passed in', async () => {
        const dummyEvents = [
            { title: 'Event 1 Stub', date: '2019-09-17 10:15' },
            { title: 'Event 2 Stub', date: '2019-09-18 10:15'}
        ]
        const calendar = renderCalendar(dummyEvents);

        expectHTML(calendar).toContainTexts([
            'Event 1 Stub',
            'Event 2 Stub'
        ])
    });

    test('Should be able to click an an event', async () => {
        const dummyEvents = [
            { title: 'Event 1 Stub', date: '2019-09-17 10:15' },
        ];

        const calendar = renderCalendar(dummyEvents);

        leftClick(calendar.getByText('Event 1 Stub'));
        expect(onEventClick).toBeCalled();
    });

    const leftClick = (elem: HTMLElement) => {
        fireEvent.click(elem, { button: 0 });
    }

    const expectHTML = (calendar: RenderResult<typeof queries>) => {
        const toContainTexts = (texts: string[]) => {
            texts.forEach((text: string) => {
                expect(calendar.getByText(text)).toBeVisible();
            })
        }

        return {
            toContainTexts: toContainTexts
        }
    }

    const onEventClick = jest.fn();

    const renderCalendar = (dummyEvents: object[]) => {
        return render(<Calendar 
            events={dummyEvents}
            onEventClick={onEventClick}
        ></Calendar>);
    }
});