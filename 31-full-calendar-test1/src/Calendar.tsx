import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import './calendar.css';
import './dayGrid.css';
import './timeGrid.css';
import './list.css';
import { EventApi, View } from '@fullcalendar/core';

const handleClickOnDate = (arg:any) => {
  alert(arg.dateStr);
}

const timeZoneString = 'America/Los_Angeles';
const timeFormatString = 'MMMM DD YYYY';

const headers = {
  left: 'dayGridMonth,timeGridWeek,timeGridDay, custom1',
  center: 'title',
  right: 'custom2, prevYear,prev,today,next,nextYear'
};

const footers = {
  left: 'custom2,custom1',
  center: '',
  right: 'prev,next',
}

const customButtons = {
  custom1: {
    text: 'custom 1',
    click: () => { alert('custom 1 is clicked!'); }
  },
  custom2: {
    text: 'custom 2',
    click: () => { alert('custom 2 is clicked!'); }
  }
}

interface ICalendar {
    events: object[],
    onEventClick: (arg: {el: HTMLElement;
        event: EventApi;
        jsEvent: MouseEvent;
        view: View}) => boolean | void;
}

const plugins = [dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    momentPlugin,
    bootstrapPlugin
  ];

const Calendar: React.SFC<ICalendar> = ({
    events,
    onEventClick
}) => {
    
    return (<div>
        <FullCalendar
        aspectRatio={11}
        fixedWeekCount={false}
        allDayText="All Day"
        header={headers}
        footer={footers}
        customButtons={customButtons}
        dateClick={handleClickOnDate}
        eventClick={onEventClick}
        defaultView="dayGridMonth"
        plugins={plugins}
        events={events}
        titleFormat={timeFormatString}
        timeZone={timeZoneString}
        //themeSystem="bootstrap"
      />
        </div>);
}

export default Calendar;